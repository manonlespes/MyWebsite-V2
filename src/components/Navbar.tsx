import { ToggleTheme } from "./ToggleTheme";
import Logo from "../assets/my-logo.webp";
import { Button } from "./Button";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar bg-base-100 sticky top-0 z-30 bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm lg:px-6">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="uses"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Uses
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost block w-20 md:w-24 h-fit"
            aria-label="Go back to Home Page"
          >
            <img alt="Manon Lespes' Portfolio" src={Logo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul tab-index={0} className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink
                to="about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="uses"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Uses
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <LazyLoadComponent>
            <ToggleTheme />
            <Button label="Contact me" isLink linkTo={"contact"} />
          </LazyLoadComponent>
        </div>
      </nav>
    </header>
  );
};
