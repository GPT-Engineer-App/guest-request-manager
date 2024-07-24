import { LayoutDashboard, InboxIcon, MessageSquareText, Users } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import IncomingRequests from "./pages/IncomingRequests";
import AutomatedResponses from "./pages/AutomatedResponses";
import BackOfficeRouting from "./pages/BackOfficeRouting";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Incoming Requests",
    to: "/incoming-requests",
    icon: <InboxIcon className="h-4 w-4" />,
    page: <IncomingRequests />,
  },
  {
    title: "Automated Responses",
    to: "/automated-responses",
    icon: <MessageSquareText className="h-4 w-4" />,
    page: <AutomatedResponses />,
  },
  {
    title: "Back Office Routing",
    to: "/back-office-routing",
    icon: <Users className="h-4 w-4" />,
    page: <BackOfficeRouting />,
  },
];