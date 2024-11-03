import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-primary-900 to-primary-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-neutral-content focus-visible:translate-x-0 z-50 "
      >
        Skip to content
      </a>
      <Navbar />

      <main id="content" className="main-container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
