/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Default demo credentials requested by user
export const DEFAULT_ADMIN_CREDENTIALS = {
  email: "admin@prismdental.com",
  password: "admin123",
  fallbackUsername: "admin",
};

const STORAGE_KEYS = {
  TOKEN: "prism_admin_token",
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
      const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
      const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

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
    // Artificial delay to simulate smooth network authentication experience
    await new Promise((resolve) => setTimeout(resolve, 400));

    const cleanIdentifier = (identifier || "").trim().toLowerCase();
    const cleanPassword = (password || "").trim();

    // Check against default credentials
    const isEmailMatch =
      cleanIdentifier === DEFAULT_ADMIN_CREDENTIALS.email.toLowerCase() ||
      cleanIdentifier === DEFAULT_ADMIN_CREDENTIALS.fallbackUsername.toLowerCase();
    const isPasswordMatch =
      cleanPassword === DEFAULT_ADMIN_CREDENTIALS.password;

    if (!isEmailMatch || !isPasswordMatch) {
      return {
        success: false,
        error: "Invalid email/username or password. Use demo credentials provided.",
      };
    }

    const authUserData = {
      id: "admin-chief-01",
      name: "Dr. Chief Admin",
      email: DEFAULT_ADMIN_CREDENTIALS.email,
      role: "Chief Dental Administrator",
      clinic: "Prism Dental Clinic",
      avatarInitials: "AD",
      loginAt: new Date().toISOString(),
    };

    const authToken = `mock-admin-token-${Date.now()}`;

    // Store in localStorage
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

    return { success: true, user: authUserData };
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.REMEMBER);
    sessionStorage.removeItem(STORAGE_KEYS.TOKEN);
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
