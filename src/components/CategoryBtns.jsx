import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CategoryBtns = ({ category }) => {
  const { category_name } = category;
  return (
    <NavLink
      to="/gadgets"
      className="font-medium bg-gray1 py-3 rounded-3xl px-7"
    >
      {category_name}
    </NavLink>
  );
};

CategoryBtns.propTypes = {
  category: PropTypes.object,
};

export default CategoryBtns;
