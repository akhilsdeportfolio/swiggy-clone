import propTypes from "prop-types";
import { FileSearchOutlined } from "@ant-design/icons";
import "./index.css";

export default function IconButton({
  icon = FileSearchOutlined,
  title = "Click Me",
  showTag = false,
  ...rest
}) {
  return (
    <div className="btn-icon" {...rest}>
      <div>{icon}</div>
      <div>
        {title}
        {showTag && (
          <sup style={{ marginLeft: "5px", color: "orange" }}>New</sup>
        )}
      </div>
    </div>
  );
}

IconButton.propTypes = {
  icon: propTypes.element,
  title: propTypes.string,
  showTag: propTypes.bool,
};
