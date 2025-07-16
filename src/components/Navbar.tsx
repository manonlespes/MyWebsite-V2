import { ToggleTheme } from "./ToggleTheme";
import Logo from "../images/my-logo.webp";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { pageListNavBar } from "../utils/content";
import { NavElement } from "./NavElement";

export const Navbar: React.FC = () => {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30">
      <nav
        aria-label="primary"
        className="navbar bg-base-100 bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm lg:px-6 xl:px-8 2xl:px-16"
      >
        <div className="navbar-start">
          {/* Menu mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow gap-4"
            >
              {pageListNavBar.map((page, index) => {
                return (
                  <li key={index}>
                    <NavElement page={page} />
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost block w-24 h-fit lg:px-0">
            <img
              alt="Manon Lespes' Portfolio - Home Page"
              src={Logo}
              className={`${
                isShrunk ? "scale-75" : "scale-100"
              } transition-all duration-300 ease-in-out`}
            />
          </Link>
        </div>
        {/* Menu desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul
            tabIndex={0}
            className="menu menu-horizontal px-1 gap-5 font-bold"
          >
            {pageListNavBar.map((page, index) => {
              return (
                <li key={index}>
                  <NavElement page={page} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <ToggleTheme />
          <Button label="Contact" isLink linkTo={"contact"} />
        </div>
      </nav>
    </header>
  );
};
