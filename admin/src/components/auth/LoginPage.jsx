import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ExternalLink,
  CalendarClock,
  MessageSquareText,
  UserCheck,
  KeyRound,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useAuth, DEFAULT_ADMIN_CREDENTIALS } from "../../context/AuthContext";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-filled with default demo values as requested
  const [identifier, setIdentifier] = useState(DEFAULT_ADMIN_CREDENTIALS.email);
  const [password, setPassword] = useState(DEFAULT_ADMIN_CREDENTIALS.password);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!identifier.trim()) {
      setErrorMessage("Please enter an email or username");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your admin password");
      return;
    }

    try {
      setLoading(true);
      const res = await login(identifier, password, rememberMe);
      if (res.success) {
        navigate(from, { replace: true });
      } else {
        setErrorMessage(res.error || "Authentication failed. Check credentials.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred during sign-in.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetToDefault = () => {
    setIdentifier(DEFAULT_ADMIN_CREDENTIALS.email);
    setPassword(DEFAULT_ADMIN_CREDENTIALS.password);
    setErrorMessage("");
  };

  const handleQuickDemoLogin = async () => {
    setIdentifier(DEFAULT_ADMIN_CREDENTIALS.email);
    setPassword(DEFAULT_ADMIN_CREDENTIALS.password);
    setErrorMessage("");
    setLoading(true);
    const res = await login(
      DEFAULT_ADMIN_CREDENTIALS.email,
      DEFAULT_ADMIN_CREDENTIALS.password,
      true
    );
    setLoading(false);
    if (res.success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FBFC] via-[#EBF7F8] to-[#DDF1F3] flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-[#0AADA8] selection:text-white">
      {/* Decorative backdrop elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0AADA8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#083258]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(8,50,88,0.12)] border border-[#D5ECF0] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Clinic Branding & Highlights (Hidden on small mobile if needed, elegant on desktop) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#083258] via-[#094269] to-[#0AADA8] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#0AADA8]/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Brand Header */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Prism Dental"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                  Prism Dental
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-[#A2F5F3]">
                    Portal
                  </span>
                </h1>
                <p className="text-xs text-[#A0C5DE] font-medium">
                  Dental Clinic Administration & Operations
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-[#A2F5F3] backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Clinic Admin Suite
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight text-white">
                Manage appointments, doctors & patient care.
              </h2>
              <p className="text-xs sm:text-sm text-[#C4DFEE] leading-relaxed">
                Centralized dashboard for real-time patient bookings, doctor
                schedules, WhatsApp reminders, and dental treatment catalogs.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#0AADA8] flex items-center justify-center shrink-0">
                  <CalendarClock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Real-Time Scheduling
                  </h4>
                  <p className="text-[11px] text-[#A0C5DE]">
                    Assign doctors, approve slots & avoid conflicts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                  <MessageSquareText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    WhatsApp Patient Reminders
                  </h4>
                  <p className="text-[11px] text-[#A0C5DE]">
                    1-click instant confirmation & reminder messages
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#026EB9] flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Specialist Availability
                  </h4>
                  <p className="text-[11px] text-[#A0C5DE]">
                    Live roster management for oral surgeons & orthodontists
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Security Note */}
          <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs text-[#A0C5DE]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              Encrypted Admin Session
            </span>
            <span className="text-[11px] opacity-80">v1.0 (Ready for Backend)</span>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
          <div>
            {/* Top Navigation Row */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-[#6B8BA2] uppercase tracking-wider">
                Administrator Sign In
              </span>

              <a
                href="https://prism-dental.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0AADA8] hover:text-[#089692] transition-colors"
              >
                <span>View Public Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-black text-[#083258] tracking-tight mb-1.5">
                Welcome Back, Admin
              </h2>
              <p className="text-xs sm:text-sm text-[#6B8BA2]">
                Please enter your clinic administrator credentials to access the
                portal.
              </p>
            </div>

            {/* Default credentials banner (User requested pre-filled default values) */}
            <div className="p-3.5 mb-6 rounded-2xl bg-[#F0FDFD] border border-[#BCEBE9] text-[#083258] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#0AADA8]/15 text-[#0AADA8] shrink-0 mt-0.5">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#083258]">
                    Default Admin Access (Pre-filled):
                  </p>
                  <p className="text-[#426480] text-[11px] mt-0.5">
                    User:{" "}
                    <span className="font-mono font-semibold text-[#0AADA8]">
                      {DEFAULT_ADMIN_CREDENTIALS.email}
                    </span>{" "}
                    | Pass:{" "}
                    <span className="font-mono font-semibold text-[#0AADA8]">
                      {DEFAULT_ADMIN_CREDENTIALS.password}
                    </span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetToDefault}
                className="self-start sm:self-center shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#0AADA8] text-white hover:bg-[#089692] transition-all cursor-pointer shadow-xs"
              >
                Auto-Fill Defaults
              </button>
            </div>

            {/* Error Message if any */}
            {errorMessage && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5 animate-shake">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Email / Username field */}
              <div>
                <label
                  htmlFor="admin-identifier"
                  className="block text-xs font-bold text-[#083258] mb-1.5 uppercase tracking-wide"
                >
                  Admin Email / Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B8BA2]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="admin-identifier"
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. contact.prisminfotech@gmail.com"
                    autoComplete="username"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5ECF0] bg-[#F8FDFF] text-[#083258] text-xs font-medium placeholder-[#6B8BA2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8] transition-all"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="admin-password"
                    className="block text-xs font-bold text-[#083258] uppercase tracking-wide"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setPassword(DEFAULT_ADMIN_CREDENTIALS.password);
                    }}
                    className="text-[11px] font-semibold text-[#0AADA8] hover:underline"
                  >
                    Use Default (prism123)
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B8BA2]">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    autoComplete="current-password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#D5ECF0] bg-[#F8FDFF] text-[#083258] text-xs font-medium placeholder-[#6B8BA2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0AADA8] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#6B8BA2] hover:text-[#083258] cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#0AADA8] rounded border-gray-300 focus:ring-[#0AADA8] accent-[#0AADA8]"
                  />
                  <span className="text-xs text-[#426480] font-medium">
                    Remember my credentials in LocalStorage
                  </span>
                </label>
              </div>

              {/* Primary Submit Button */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0AADA8] to-[#089692] hover:from-[#089692] hover:to-[#07807c] text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Authenticating Admin...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to Admin Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Instant 1-Click Demo Login */}
                <button
                  type="button"
                  onClick={handleQuickDemoLogin}
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#D5ECF0] hover:bg-[#F5FBFC] text-[#083258] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#0AADA8]" />
                  <span>1-Click Direct Demo Sign In</span>
                </button>
              </div>
            </form>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-[#E8F1F5] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#6B8BA2]">
            <p>© {new Date().getFullYear()} Prism Dental Clinic Portal.</p>
            <p className="flex items-center gap-1 font-medium text-[#0AADA8]">
              <ShieldCheck className="w-3.5 h-3.5" />
              JWT Secure Backend Authentication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
