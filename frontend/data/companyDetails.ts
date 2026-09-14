import { companydetails } from "../company_details";

export const COMPANY_DETAILS = {
  name: "Prism Dental Clinic",
  email: companydetails.Email || "contact.prisminfotech@gmail.com",
  phone: String(companydetails.Contact || "8239239249"),
  phoneFormatted: "+91 82392 39249",
  whatsapp: String(companydetails.whatsApp || "8239239249"),
  whatsappFormatted: "+91 82392 39249",
  whatsappLink: `https://wa.me/91${String(companydetails.whatsApp || "8239239249").replace(/[^0-9]/g, "")}`,
  address: "Near Bus Stand, Ramganjmandi, Kota, Rajasthan - 326519",
  addressLine1: "Near Bus Stand, Ramganj Mandi",
  addressLine2: "Kota, Rajasthan - 326519",
  addressLandmark: "(Opp. Main Bus Stand)",
  workingHoursWeekday: "Mon - Sat: 9:00 AM - 8:00 PM",
  workingHoursSunday: "Sunday: 10:00 AM - 2:00 PM",
};

export default COMPANY_DETAILS;
