import PropTypes from "prop-types";
import CategoryBtns from "./CategoryBtns";

const Categories = ({ categories }) => {
  return (
    <aside className="w-1/5 flex flex-col font-sora p-6 border border-gray2 rounded-2xl gap-6 h-min">
      {categories.map((category) => (
        <CategoryBtns
          key={category.category_id}
          category={category}
        ></CategoryBtns>
      ))}
    </aside>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
