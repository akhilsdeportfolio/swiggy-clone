import propTypes from "prop-types";
import "./index.css";

export default function FoodItem({ url, alt }) {
  return (
    <>
      <img className="foodItem hover:cursor-pointer" src={url} alt={alt} />
    </>
  );
}

FoodItem.propTypes = {
  url: propTypes.string,
  alt: propTypes.string,
};

FoodItem.defaultProps = {
  url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
  alt: "random alternate text",
};
