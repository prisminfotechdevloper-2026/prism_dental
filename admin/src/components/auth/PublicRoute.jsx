import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Loader2 } from "lucide-react";

export function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5FBFC] flex flex-col items-center justify-center p-4">
        <div className="flex items-center gap-2 text-[#0AADA8] font-semibold text-sm">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    // If user came from a protected page, send them back there, else default to /
    const fromPath = location.state?.from?.pathname || "/";
    return <Navigate to={fromPath} replace />;
  }

  return children;
}
