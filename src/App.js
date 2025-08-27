import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Hero from "./features/Hero";
import About from "./features/About";
import Pricing from "./features/Pricing";
import Portfolio from "./features/Portfolio";
import ProjectPage from "./pages/projects/[id]";
import QuizCalculator from "./features/QuizCalculator";
import Contacts from "./features/Contacts";
import Testimonials from "./features/Testimonials";
import Footer from "./layout/Footer";
import Application from "./features/Application";
import ScrollToTopButton from "./components/UI/ScrollToTopButton";
import ProjectContent from "./features/ProjectContent";
import ScrollToTop from "./components/UI/ScrollToTop";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ScrollToTopButton />
                <About />
                <Portfolio />
                <Pricing />
                <ProjectContent />
                <QuizCalculator />
                <Testimonials />
                <Application />
                <Contacts />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <>
                <ProjectPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
