import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AdminProvider, useAdmin } from "./context/AdminContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { PublicRoute } from "./components/auth/PublicRoute";
import { LoginPage } from "./components/auth/LoginPage";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Toast } from "./components/common/Toast";
import { DashboardOverview } from "./components/dashboard/DashboardOverview";
import { AppointmentsList } from "./components/appointments/AppointmentsList";
import { AppointmentFormModal } from "./components/appointments/AppointmentFormModal";
import { AppointmentDetailModal } from "./components/appointments/AppointmentDetailModal";
import { WhatsAppModal } from "./components/appointments/WhatsAppModal";
import { DoctorsManager } from "./components/doctors/DoctorsManager";
import { TreatmentsManager } from "./components/treatments/TreatmentsManager";
import { ContactEnquiries } from "./components/messages/ContactEnquiries";
import { TestimonialsManager } from "./components/testimonials/TestimonialsManager";
import { GalleryManager } from "./components/gallery/GalleryManager";
import { BlogManager } from "./components/blog/BlogManager";
import { ClinicSettings } from "./components/settings/ClinicSettings";

function AdminPortal() {
  const { toast } = useAdmin();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Modals state
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [detailAppointment, setDetailAppointment] = useState(null);
  const [whatsAppAppointment, setWhatsAppAppointment] = useState(null);

  const handleOpenEdit = (apt) => {
    setEditingAppointment(apt);
    setIsFormModalOpen(true);
  };

  const handleOpenDetail = (apt) => {
    setDetailAppointment(apt);
  };

  const handleOpenWhatsApp = (apt) => {
    setWhatsAppAppointment(apt);
  };

  return (
    <div className="min-h-screen bg-[#F5FBFC] flex text-[#083258]">
      {/* Navigation Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Sticky Top Header */}
        <Header setMobileOpen={setMobileOpen} />

        {/* Dynamic Page View Routes */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <DashboardOverview
                  onOpenDetail={handleOpenDetail}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route
              path="/appointments"
              element={
                <AppointmentsList
                  onOpenDetail={handleOpenDetail}
                  onOpenEdit={handleOpenEdit}
                  onOpenWhatsApp={handleOpenWhatsApp}
                />
              }
            />
            <Route path="/doctors" element={<DoctorsManager />} />
            <Route path="/treatments" element={<TreatmentsManager />} />
            <Route path="/enquiries" element={<ContactEnquiries />} />
            <Route path="/testimonials" element={<TestimonialsManager />} />
            <Route path="/gallery" element={<GalleryManager />} />
            <Route path="/blog" element={<BlogManager />} />
            <Route path="/settings" element={<ClinicSettings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Clinic Admin Footer */}
        <Footer />
      </div>

      {/* Appointment Create / Edit Modal */}
      <AppointmentFormModal
        isOpen={isFormModalOpen}
        onClose={() => {
          setIsFormModalOpen(false);
          setEditingAppointment(null);
        }}
        initialData={editingAppointment}
      />

      {/* Appointment Full Dossier Modal */}
      <AppointmentDetailModal
        isOpen={!!detailAppointment}
        onClose={() => setDetailAppointment(null)}
        appointment={detailAppointment}
        onEdit={handleOpenEdit}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* WhatsApp Message Generator & Direct Sender */}
      <WhatsAppModal
        isOpen={!!whatsAppAppointment}
        onClose={() => setWhatsAppAppointment(null)}
        appointment={whatsAppAppointment}
      />

      {/* Toast Notification Alert */}
      <Toast toast={toast} onClose={() => {}} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <Routes>
            {/* Public Login Route */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            {/* Guarded Admin Dashboard Routes */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <AdminPortal />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}