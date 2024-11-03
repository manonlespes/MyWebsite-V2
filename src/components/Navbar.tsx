import { ToggleTheme } from "./ToggleTheme";
import Logo from "../assets/my-logo.webp";
import { Button } from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <nav className="navbar bg-base-100 bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm lg:px-6 xl:px-8 2xl:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              tab-index={1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow gap-4"
            >
              <li>
                <NavLink
                  to="about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-sm"
                      : isActive
                      ? "active text-sm"
                      : "text-sm"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-sm"
                      : isActive
                      ? "active text-sm"
                      : "text-sm"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="uses"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-sm"
                      : isActive
                      ? "active text-sm"
                      : "text-sm"
                  }
                >
                  Uses
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost block w-24 h-fit lg:px-0"
            aria-label="Go back to Home Page"
          >
            <img
              alt="Manon Lespes' Portfolio"
              src={Logo}
              className={`${
                isShrunk ? "scale-75" : "scale-100"
              } transition-all duration-300 ease-in-out`}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            tab-index={0}
            className="menu menu-horizontal px-1 gap-5 font-bold"
          >
            <li className="">
              <NavLink
                to="about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending text-sm"
                    : isActive
                    ? "active text-sm"
                    : "text-sm"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending text-sm"
                    : isActive
                    ? "active text-sm"
                    : "text-sm"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="uses"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending text-sm"
                    : isActive
                    ? "active text-sm"
                    : "text-sm"
                }
              >
                Uses
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <ToggleTheme />
          <Button label="Contact me" isLink linkTo={"contact"} />
        </div>
      </nav>
    </header>
  );
};
