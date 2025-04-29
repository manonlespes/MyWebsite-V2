import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const NavElement = ({
  page,
  isFooter,
}: {
  page: string;
  isFooter?: boolean;
}) => {
  const capitalizefirstletter = (word: string) => {
    const element = word.charAt(0).toUpperCase() + word.slice(1);

    return element;
  };

  const styleActive = clsx("active text-sm", isFooter && "link");
  const styleNotActive = clsx("text-sm", isFooter && "link-animation-footer");

  return (
    <NavLink
      to={page}
      className={({ isActive, isPending }) =>
        isPending ? "pending text-sm" : isActive ? styleActive : styleNotActive
      }
    >
      {capitalizefirstletter(page)}
    </NavLink>
  );
};
