import { useState } from "react";
import { AdminProvider, useAdmin } from "./context/AdminContext";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
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
  const { currentTab, toast } = useAdmin();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Modals state
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [detailAppointment, setDetailAppointment] = useState(null);
  const [whatsAppAppointment, setWhatsAppAppointment] = useState(null);

  const handleOpenNewAppointment = () => {
    setEditingAppointment(null);
    setIsFormModalOpen(true);
  };

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

  const renderActiveTab = () => {
    switch (currentTab) {
      case "dashboard":
        return (
          <DashboardOverview
            onOpenNewAppointment={handleOpenNewAppointment}
            onOpenDetail={handleOpenDetail}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        );
      case "appointments":
        return (
          <AppointmentsList
            onOpenNewAppointment={handleOpenNewAppointment}
            onOpenDetail={handleOpenDetail}
            onOpenEdit={handleOpenEdit}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        );
      case "doctors":
        return <DoctorsManager />;
      case "treatments":
        return <TreatmentsManager />;
      case "enquiries":
        return <ContactEnquiries />;
      case "testimonials":
        return <TestimonialsManager />;
      case "gallery":
        return <GalleryManager />;
      case "blog":
        return <BlogManager />;
      case "settings":
        return <ClinicSettings />;
      default:
        return (
          <DashboardOverview
            onOpenNewAppointment={handleOpenNewAppointment}
            onOpenDetail={handleOpenDetail}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5FBFC] flex text-[#083258]">
      {/* Navigation Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Sticky Top Header */}
        <Header
          setMobileOpen={setMobileOpen}
          onOpenNewAppointment={handleOpenNewAppointment}
        />

        {/* Dynamic Page View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderActiveTab()}
        </main>
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
    <AdminProvider>
      <AdminPortal />
    </AdminProvider>
  );
}