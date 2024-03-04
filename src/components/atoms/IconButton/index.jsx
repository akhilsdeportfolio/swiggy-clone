import propTypes from "prop-types";
import { FileSearchOutlined } from "@ant-design/icons";
import "./index.css";
import { Badge } from "antd";

export default function IconButton({
  icon = FileSearchOutlined,
  title = "Click Me",
  showTag = false,
  showBadge = false,
  count = 10,
  ...rest
}) {
  return (
    <div className="btn-icon" {...rest}>
      <div>
        {showBadge && (
          <Badge showZero size="small" count={count}>
            {icon}
          </Badge>
        )}
        {!showBadge && icon}
      </div>
      <div>
        {title}
        {showTag && <sup className="ml-1 text-orange-500">NEW</sup>}
      </div>
    </div>
  );
}

IconButton.propTypes = {
  icon: propTypes.element,
  title: propTypes.string,
  showTag: propTypes.bool,
  showBadge: propTypes.bool,
  count: propTypes.number,
};
