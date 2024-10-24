import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="main-container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
