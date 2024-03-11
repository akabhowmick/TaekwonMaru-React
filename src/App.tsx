import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Footer } from "./Components/SharedSections/Footer/Footer";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./Components/Pages/Home/Home";
import { Contact } from "./Components/Pages/Contact/Contact";
import { AboutUs } from "./Components/Pages/AboutUs/AboutUs";
import { Program } from "./Components/Pages/Programs/Program";
import { Schedule } from "./Components/Pages/Schedule/Schedule";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="programs" element={<Program />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
