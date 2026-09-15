/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Default admin credentials
export const DEFAULT_ADMIN_CREDENTIALS = {
  email: "contact.prisminfotech@gmail.com",
  password: "prism123",
  fallbackUsername: "prisminfotech",
};

const STORAGE_KEYS = {
  TOKEN: "prism_admin_token",
  REFRESH: "prism_admin_refresh_token",
  USER: "prism_admin_user",
  REMEMBER: "prism_admin_remember",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    try {
      const storedToken =
        localStorage.getItem(STORAGE_KEYS.TOKEN) ||
        sessionStorage.getItem(STORAGE_KEYS.TOKEN);
      const storedUser =
        localStorage.getItem(STORAGE_KEYS.USER) ||
        sessionStorage.getItem(STORAGE_KEYS.USER);

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("Failed to restore admin auth session:", err);
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (identifier, password, remember = true) => {
    const cleanIdentifier = (identifier || "").trim();
    const cleanPassword = (password || "").trim();

    const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

    try {
      // Connect to Django JWT login endpoint
      const response = await fetch(`${apiUrl}/api/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanIdentifier,
          password: cleanPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error:
            data.error ||
            data.detail ||
            "Invalid email or password. Please verify credentials.",
        };
      }

      const authToken = data.access;
      const refreshToken = data.refresh;
      const authUserData = {
        id: data.user?.id || "admin-01",
        name: data.user?.name || "Prism Admin",
        email: data.user?.email || cleanIdentifier,
        role: "Chief Clinic Administrator",
        clinic: "Prism Dental Clinic",
        avatarInitials: "PA",
        loginAt: new Date().toISOString(),
      };

      // Store tokens
      if (remember) {
        localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
        if (refreshToken) localStorage.setItem(STORAGE_KEYS.REFRESH, refreshToken);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authUserData));
        localStorage.setItem(STORAGE_KEYS.REMEMBER, "true");
      } else {
        sessionStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
        if (refreshToken) sessionStorage.setItem(STORAGE_KEYS.REFRESH, refreshToken);
        sessionStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authUserData));
      }

      setToken(authToken);
      setUser(authUserData);

      return { success: true, user: authUserData, token: authToken };
    } catch (err) {
      console.warn("Backend API unreachable, checking credentials offline:", err);

      const isEmailMatch =
        cleanIdentifier.toLowerCase() ===
          DEFAULT_ADMIN_CREDENTIALS.email.toLowerCase() ||
        cleanIdentifier.toLowerCase() ===
          DEFAULT_ADMIN_CREDENTIALS.fallbackUsername.toLowerCase();
      const isPasswordMatch =
        cleanPassword === DEFAULT_ADMIN_CREDENTIALS.password;

      if (!isEmailMatch || !isPasswordMatch) {
        return {
          success: false,
          error: "Invalid email/username or password. Use demo credentials provided.",
        };
      }

      const authUserData = {
        id: "admin-offline-01",
        name: "Prism Admin",
        email: DEFAULT_ADMIN_CREDENTIALS.email,
        role: "Chief Dental Administrator",
        clinic: "Prism Dental Clinic",
        avatarInitials: "PA",
        loginAt: new Date().toISOString(),
      };

      const authToken = `mock-admin-token-${Date.now()}`;

      if (remember) {
        localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authUserData));
        localStorage.setItem(STORAGE_KEYS.REMEMBER, "true");
      } else {
        sessionStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
        sessionStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authUserData));
      }

      setToken(authToken);
      setUser(authUserData);

      return { success: true, user: authUserData, token: authToken };
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.REMEMBER);
    sessionStorage.removeItem(STORAGE_KEYS.TOKEN);
    sessionStorage.removeItem(STORAGE_KEYS.REFRESH);
    sessionStorage.removeItem(STORAGE_KEYS.USER);

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        loading,
        login,
        logout,
        defaultCredentials: DEFAULT_ADMIN_CREDENTIALS,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
