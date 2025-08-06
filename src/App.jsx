import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import SaddarPage from "./routes/center/Saddar";
import Analytics from "./routes/Analytics/Analytics";
import Karachi from "./routes/center/Karachi";
import Adayala from "./routes/center/Adayala";
import Chandni from "./routes/center/Chandni";
import Capital from "./routes/center/Capital";
import Khanapul from "./routes/center/Khanapul";
import Slik from "./routes/center/Slik";
import CustomerServices from "./routes/employees/CustomerServices";
import Managers from "./routes/employees/Managers";
import ITSupport from "./routes/employees/ItSupport";
import Medicare from "./routes/campaigns/Medicare";
import Himp from "./routes/campaigns/Himp";
import FinalExpense from "./routes/campaigns/FinalExpense";
import Setting from "./routes/setting/Setting";
import Profile from "./components/Profile";
import Login from "./components/Login";



function App() {
    const router = createBrowserRouter([

      {
    path: "/login",
    element: <Login />, // 👈 no Layout here
  },

        {
            path: "/",
            element: <Layout />,
           children: [
  {
    index: true,
    element: <DashboardPage />,
  },
  {
    path: "analytics",
    element: <Analytics/>,
  },
  {
    path: "/customerservices",
    element: <CustomerServices/>,
  },
  {
    path: "/managers",
    element: <Managers/>,
  },
  
  {
    path: "/itsupport",
    element: <ITSupport/>,
  },
  
  {
    path: "/medicare",
    element:<Medicare/>,
  },
  {
    path: "/himp",
    element: <Himp/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/final",
    element: <FinalExpense/>,
  },
  {
    path: "settings",
    element: <Setting/>,
  },

  // 🏢 Center paths
  {
    path: "center/karachi",
    element: <Karachi/>,
  },
 {
  path: "center/saddar",
  element: <SaddarPage />,
},

  {
    path: "center/zero-two",
    element: <Chandni/>,
  },
  {
    path: "center/capital",
    element: <Capital/>,
  },
  {
    path: "center/khanapul",
    element: <Khanapul/>,
  },
  {
    path: "center/silk",
    element: <Slik/>,
  },
  {
    path: "center/adyala",
    element: <Adayala/>,
  },
],

        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
