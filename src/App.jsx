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

import Finance from "./routes/employees/Finance";

import ITSupport from "./routes/employees/ItSupport";


function App() {
    const router = createBrowserRouter([
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
    path: "/finance",
    element: <Finance/>,
  },
  
  {
    path: "/itsupport",
    element: <ITSupport/>,
  },
  
  {
    path: "reports",
    element: <h1 className="title">Reports</h1>,
  },
  {
    path: "customers",
    element: <h1 className="title">Customers</h1>,
  },
  {
    path: "new-customer",
    element: <h1 className="title">New Customer</h1>,
  },
  {
    path: "verified-customers",
    element: <h1 className="title">Verified Customers</h1>,
  },
  {
    path: "products",
    element: <h1 className="title">Products</h1>,
  },
  {
    path: "new-product",
    element: <h1 className="title">New Product</h1>,
  },
  {
    path: "inventory",
    element: <h1 className="title">Inventory</h1>,
  },
  {
    path: "settings",
    element: <h1 className="title">Settings</h1>,
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
