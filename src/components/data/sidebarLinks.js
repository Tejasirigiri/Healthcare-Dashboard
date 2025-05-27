import { MdDashboard } from "react-icons/md";
import { FaArrowUp, FaArrowDown, FaCalendarAlt, FaClipboardList, FaChartBar, FaFlask, FaComments, FaPhoneAlt, FaCog } from "react-icons/fa";

export const sidebarSections = [
  {
    title: "General",
    links: [
      { name: "Dashboard", icon: <MdDashboard />, bold: true },
      { name: "History", icon: <><FaArrowUp /> <FaArrowDown /></> },
      { name: "Calendar", icon: <FaCalendarAlt /> },
      { name: "Appointments", icon: <FaClipboardList /> },
      { name: "Statistics", icon: <FaChartBar /> },
      
    ]
  },
  {
    title: "Tools",
    links: [
      { name: "Chat", icon: <FaComments /> },
      { name: "Support", icon: <FaPhoneAlt /> },
      { name: "Setting", icon: <FaCog /> }
    ]
  }
];
