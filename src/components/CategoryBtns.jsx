import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CategoryBtns = ({ category }) => {
  const { category_name } = category;
  return (
    <NavLink
      to={`/gadgets/${category_name}`}
      className={({ isActive }) =>
        `font-medium bg-gray1 py-3 rounded-3xl px-7 ${
          isActive
            ? "bg-purple-600 text-white duration-200 transition-colors ease-in-out"
            : ""
        }`
      }
    >
      {category_name}
    </NavLink>
  );
};

CategoryBtns.propTypes = {
  category: PropTypes.object,
};

export default CategoryBtns;
