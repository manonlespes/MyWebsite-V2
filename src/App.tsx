import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Tools = lazy(() => import("./pages/Tools"));

import { HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <Suspense
          fallback={<span className="loading loading-ring loading-lg"></span>}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              //--------------gives access to child component
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="projects" element={<Project />} />
              <Route path="uses" element={<Tools />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
