import Home from "@pages/Home";
import About from "@pages/About";
import FAQ from "@pages/FAQ";
import Contribute from "@pages/Contribute";
import LandingLayout from "@/layouts/LandingLayout";

const LandingRoutes = {
  name: "landing",
  path: "/",
  element: <LandingLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "about", element: <About /> },
    { path: "faq", element: <FAQ /> },
    { path: "contribute", element: <Contribute /> },
  ],
};

export default LandingRoutes;
