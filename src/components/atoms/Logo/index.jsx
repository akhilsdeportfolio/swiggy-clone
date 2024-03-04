import propTypes from "prop-types";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Logo({
  showTitle = false,
  url = "https://cdn.iconscout.com/icon/free/png-512/free-swiggy-1613371-1369418.png?f=webp&w=512",
  alt = "Logo Swiggy",
  title = "Swiggy",
}) {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <div className="logo" onClick={handleLogoClick}>
      <div>
        <img className="image" src={url} alt={alt} />
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
