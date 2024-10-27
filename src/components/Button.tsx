import { Link } from "react-router-dom";
import { ButtonType } from "./types/ComponentsTypes";

export const Button = (props: ButtonType) => {
  const { label, isLink, linkTo, className = "" } = props;
  return (
    <>
      {isLink && linkTo ? (
        <Link
          to={linkTo}
          className="btn-sm md:btn-md rounded-lg bg-primary-500 text-neutral-content relative overflow-hidden group z-10 hover:text-neutral-content duration-1000"
        >
          <span className="absolute bg-primary-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-primary-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          {label}
        </Link>
      ) : (
        <button
          type="submit"
          className={`${className} btn-sm md:btn-md rounded-lg bg-primary-500 text-neutral-content relative overflow-hidden group z-10 hover:text-neutral-content duration-1000 `}
        >
          <span className="absolute bg-primary-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-primary-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          {label}
        </button>
      )}
    </>
  );
};
