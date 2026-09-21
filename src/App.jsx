import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BackgroundEffects from "./components/BackgroundEffects/BackgroundEffects";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="app relative min-h-screen">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/projects" element={<Projects />} />

            <Route
              path="/projects/:slug"
              element={<ProjectDetails />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;