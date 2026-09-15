# 🚀 Render Deployment Guide - Prism Dental Backend

Complete step-by-step instructions, environment variables, build/start commands, and database configuration for deploying the Django backend to **Render**.

---

## 📌 Repository Architecture Note
This project uses a monorepo structure:
```text
prism_dental/
├── admin/       (React Admin Panel)
├── backend/     (Django REST API)  <-- Service to deploy
└── frontend/    (Next.js / Client Web)
```
> **CRITICAL**: When creating the Web Service on Render, set **Root Directory** to `backend`.

---

## Step 1: Create PostgreSQL Database on Render

1. Log in to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** -> **PostgreSQL**.
3. Fill in the details:
   - **Name**: `prism-dental-db`
   - **Database**: `prism_dental`
   - **User**: `prism_dental_user` (or leave default)
   - **Region**: `Singapore` (or nearest to your location)
   - **Plan**: `Free`
4. Click **Create Database**.
5. Once created, go to the **Connections** section:
   - Copy **Internal Database URL** (recommended for Web Service in same account/region).
   - Copy **External Database URL** (for local testing/access).

---

## Step 2: Create Web Service on Render

1. On Render Dashboard, click **New +** -> **Web Service**.
2. Connect your GitHub repository: `prism_dental`.
3. Configure the following fields:

| Field | Value |
|---|---|
| **Name** | `prism-dental-backend` |
| **Language / Runtime** | `Python 3` |
| **Branch** | `main` |
| **Region** | Same as Database (e.g. `Singapore`) |
| **Root Directory** | `backend` *(Mandatory)* |
| **Build Command** | `pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput` |
| **Start Command** | `gunicorn backend.wsgi:application` |
| **Instance Type** | `Free` |

---

## Step 3: Set Environment Variables

Navigate to your Web Service -> **Environment** tab, click **Add Environment Variable**, and set:

| Key | Value | Notes |
|---|---|---|
| `DATABASE_URL` | `postgresql://prism_dental_user:9titniHqUl6xlGNdQaSeZ3tTzvjldALC@dpg-dakk6t7qj5pc73bfsdug-a/prism_dental` | Render PostgreSQL Internal Database URL |
| `SECRET_KEY` | `django-insecure-6c2eco1@*fy%77yu_+%$0r^jt7qwo^if%rv2nq6xrojw71n3v#` | Django Security Key |
| `DEBUG` | `False` | Keep False for production |
| `PYTHON_VERSION` | `3.12.8` | **Must be 3.12+** because Django 6.1.1 requires Python >= 3.12 |
| `RENDER_EXTERNAL_HOSTNAME` | Set automatically by Render | Handled in settings.py |
| `CORS_ALLOW_ALL_ORIGINS` | `True` | Allows requests from Frontend & Admin |

---

## Step 4: Create Superuser / Admin

After deployment succeeds:

1. Open your Web Service (`prism-dental-backend`) on Render.
2. Go to the **Shell** tab on the left sidebar.
3. Run the following command:
   ```bash
   python manage.py createsuperuser
   ```
4. Enter your details:
   - **Email**: `contact.prisminfotech@gmail.com`
   - **Password**: `prism123` (or your preferred password)

---

## Step 5: Verify Live Endpoints

After deployment, your service URL will be available at:
`https://prism-dental-backend.onrender.com`

- **Django Admin**: `https://prism-dental-backend.onrender.com/admin/`
- **Swagger Docs**: `https://prism-dental-backend.onrender.com/api/docs/`
- **Alternative Docs**: `https://prism-dental-backend.onrender.com/api/swagger/`

---

## 🛠️ Quick Reference Cheat Sheet

```bash
# Build Command:
pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput

# Start Command:
gunicorn backend.wsgi:application

# Root Directory:
backend

# Python Version:
3.12.8
```
