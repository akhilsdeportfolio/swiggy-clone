import IconButton from "../../atoms/IconButton";
import propTypes from "prop-types";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function MenuList({ items }) {
  const navigate = useNavigate();
  function handleItemClick(item) {
    const { path } = item;
    if (path) {
      navigate(path);
    }
  }
  return (
    <div className="menu-list">
      {items.map((item) => (
        <IconButton
          key={item.key}
          {...item}
          onClick={() => {
            handleItemClick(item);
          }}
        />
      ))}
    </div>
  );
}

MenuList.propTypes = {
  items: propTypes.array,
};
