import IconButton from "../../atoms/IconButton";
import propTypes from "prop-types";
import "./index.css";

export default function MenuList({ items }) {
  return (
    <div className="menu-list">
      {items.map((item) => (
        <IconButton key={item.key} {...item} />
      ))}
    </div>
  );
}

MenuList.propTypes = {
  items: propTypes.array,
};
