import "./App.css";
import "./Components/SharedSections/Animations/Animations.css";
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
import { TailSpin } from "react-loader-spinner";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <TailSpin
            color="var(--dark-red)"
            ariaLabel="tail-spin-loading"
          />
          <h2 className="bounce-in-top">Loading TaekwonMaru...</h2>
        </div>
      ) : (
        <>
          <RouterProvider router={router} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
