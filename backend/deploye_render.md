# 🚀 Render Deployment Guide - Prism Dental Backend

यह गाइड आपको Prism Dental Django Backend को **Render** पर step-by-step deploy करने के लिए सभी जरूरी settings, environment variables और commands प्रदान करती है।

---

## 📌 Important Repo Architecture Note
आपका Git Repository Monorepo structure में है:
```text
prism_dental/
├── admin/       (React Admin Panel)
├── backend/     (Django API - Python)  <-- Hume ise deploy karna hai
└── frontend/    (Next.js / Client Web)
```
> **महत्वपूर्ण**: Render पर Service बनाते समय **Root Directory** में `backend` डालना अनिवार्य है।

---

## Step 1: Render पर PostgreSQL Database बनाएं

1. Render Dashboard ([dashboard.render.com](https://dashboard.render.com)) में लॉगिन करें।
2. **New +** बटन पर क्लिक करके **PostgreSQL** चुनें।
3. डिटेल्स भरें:
   - **Name**: `prism-dental-db`
   - **Database**: `prism_dental`
   - **User**: `postgres` (या default रहने दें)
   - **Region**: `Singapore` (या जो आपके सबसे नज़दीक हो)
   - **Plan**: `Free`
4. **Create Database** पर क्लिक करें।
5. Database बनने के बाद **Connections** सेक्शन में जाएं और:
   - **Internal Database URL** कॉपी करें (अगर Web Service और DB एक ही Render account/region में हैं).
   - या **External Database URL** कॉपी करें.

---

## Step 2: Web Service बनाएं

1. Render Dashboard पर **New +** -> **Web Service** पर क्लिक करें।
2. अपना GitHub Repository (`prism_dental`) connect करें।
3. निम्नलिखित कॉन्फ़िगरेशन सेट करें:

| Field | Value |
|---|---|
| **Name** | `prism-dental-backend` |
| **Language / Runtime** | `Python 3` |
| **Branch** | `main` (या आपकी active branch) |
| **Region** | वही चुनें जो Database के लिए चुना था (e.g. `Singapore`) |
| **Root Directory** | `backend` ⚠️ *(बहुत जरूरी)* |
| **Build Command** | `pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput` |
| **Start Command** | `gunicorn backend.wsgi:application` |
| **Instance Type** | `Free` |

---

## Step 3: Environment Variables (Render Dashboard)

Web Service के **Environment** टैब में जाकर **Add Environment Variable** पर क्लिक करें और नीचे दी गई keys जोड़ें:

| Key | Value | Description |
|---|---|---|
| `DATABASE_URL` | `postgresql://user:pass@host/prism_dental` | Step 1 में कॉपी किया गया Database URL |
| `SECRET_KEY` | `django-insecure-generate-a-strong-random-key-here-12345` | Django Security Key |
| `DEBUG` | `False` | Production में False रखें (या testing के लिए Temporary `True` रख सकते हैं) |
| `PYTHON_VERSION` | `3.11.9` | Render का python version lock करने के लिए |
| `RENDER_EXTERNAL_HOSTNAME` | Automatic (Render खुद सेट करता है) | ALLOWED_HOSTS के लिए |
| `CORS_ALLOW_ALL_ORIGINS` | `True` | Frontend & Admin Panel se cross-origin requests allow karne ke liye |

---

## Step 4: Admin / Superuser Create करना

Deploy पूरा होने के बाद Superuser बनाने के लिए:

1. Render Dashboard में अपनी Web Service (`prism-dental-backend`) खोलें।
2. बायीं तरफ दिए गए **Shell** टैब पर क्लिक करें।
3. नीचे दिया गया command चलाएं:
   ```bash
   python manage.py createsuperuser
   ```
4. Email, Username और Password दर्ज करें:
   - Email: `contact.prisminfotech@gmail.com`
   - Password: `prism123` (या जो आप रखना चाहें)

---

## Step 5: Test Your Deployment

Deploy होने के बाद Render आपको एक URL देगा, जैसे:
`https://prism-dental-backend.onrender.com`

- **Admin Panel**: `https://prism-dental-backend.onrender.com/admin/`
- **Swagger Documentation**: `https://prism-dental-backend.onrender.com/api/docs/`
- **Alternative Docs**: `https://prism-dental-backend.onrender.com/api/swagger/`

---

## 🛠️ Summary Quick Sheet for Render

```bash
# Build Command:
pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput

# Start Command:
gunicorn backend.wsgi:application

# Root Directory:
backend
```
