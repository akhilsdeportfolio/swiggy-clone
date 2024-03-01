import propTypes from "prop-types";
import "./styles.css";

export default function Logo({
  showTitle = false,
  url = "https://cdn.iconscout.com/icon/free/png-512/free-swiggy-1613371-1369418.png?f=webp&w=512",
  alt = "Logo Swiggy",
  title = "Swiggy",
}) {
  return (
    <div className="logo">
      <div>
        <img src={url} alt={alt} style={{ width: "50px", height: "50px" }} />
      </div>
      {showTitle && (
        <div>
          <h4>{title}</h4>
        </div>
      )}
    </div>
  );
}

Logo.propTypes = {
  url: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  showTitle: propTypes.bool,
};
