import propTypes from "prop-types";
import RatingAndDelivery from "../../atoms/RatingAndDelivery";
import RestaurantAddress from "../../atoms/RestaurantAddress";
import RestautantImage from "../../atoms/RestaurantImage";
import RestautantName from "../../atoms/RestaurantName";

export default function RestautantCard({
  url,
  name,
  offerText,
  showOffer,
  rating,
  deliveryTime,
  category,
  address,
}) {
  return (
    <div className="max-w-[273px] transition-all hover:scale-90 ">
      <RestautantImage url={url} offerText={offerText} showOffer={showOffer} />
      <RestautantName name={name} />
      <RatingAndDelivery rating={rating} deliveryTime={deliveryTime} />
      <RestaurantAddress category={category} address={address} />
    </div>
  );
}

RestautantCard.propTypes = {
  url: propTypes.string,
  name: propTypes.string,
  rating: propTypes.string,
  showOffer: propTypes.bool,
  offerText: propTypes.string,
  deliveryTime: propTypes.string,
  category: propTypes.string,
  address: propTypes.string,
};

RestautantCard.defaultProps = {
  url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ixgxvfu6ggvw1w1awgr1",
  name: "Samosa Party",
  rating: "3.4",
  showOffer: true,
  offerText: "60% OFF UPTO ₹120",
  deliveryTime: "40-45 mins",
  category:
    "Fast Food, Snacks, Beverages, Chaat, North Indian, Street Food, Sweets, Desserts, Punjabi, Bakery",
  address: "Brigade Road",
};
