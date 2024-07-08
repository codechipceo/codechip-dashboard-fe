import Dashboard from "@mui/icons-material/Dashboard";
// import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import CallSplitSharpIcon from "@mui/icons-material/CallSplitSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import SubjectSharpIcon from "@mui/icons-material/SubjectSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";

export const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: Dashboard,
  },
  {
    name: "Project",
    path: "",
    icon: AssignmentSharpIcon,
    subMenu: [
      {
        name: "New Project",
        path: "/project/add",
      },
      {
        name: "In Progress",
        path: "/project/in-progress",
      },
      {
        name: "Delivered",
        path: "/project/delivered",
      },
    ],
  },
  {
    name: "Clients",
    path: "/clients",
    icon: AssignmentSharpIcon,
    // subMenu: [
    //   {
    //     name: "Add Clients",
    //     path: "/clients/add-clients",
    //   },
    //   {
    //     name: "View Clients",
    //     path: "/clients/view-clients",
    //   },
    // ],
  },
  {
    name: "Leads",
    path: "",
    icon: AssignmentSharpIcon,
    subMenu: [
      {
        name: "Add Leads",
        path: "/leads/add",
      },
      {
        name: "View Leads",
        path: "/leads/view",
      },
    ],
  },
  {
    name: "Bulk Emailing",
    path: "",
    icon: ScienceSharpIcon,
    subMenu: [
      {
        name: "Add Clients",
        path: "/bulk-mail/add-clients",
      },
      {
        name: "View Clients",
        path: "/bulk-mail/view-clients",
      },
    ],
  },
  {
    name: "Email Templates",
    path: "",
    icon: ScienceSharpIcon,
    subMenu: [
      {
        name: "Add Template",
        path: "/templates/add",
      },
      {
        name: "View Templates",
        path: "/templates/view",
      },
    ],
  },
];
