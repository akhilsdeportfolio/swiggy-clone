import propTypes from "prop-types";
import "./styles.css";

export default function Logo({
  url = "https://placehold.co/50x50",
  alt = "Logo Swiggy",
  title = "Swiggy",
}) {
  return (
    <div className="logo">
      <div>
        <img src={url} alt={alt} style={{ width: "50px", height: "50px" }} />
      </div>
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

Logo.propTypes = {
  url: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
};
