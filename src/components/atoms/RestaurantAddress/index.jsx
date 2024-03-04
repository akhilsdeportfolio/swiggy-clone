import propTypes from "prop-types";

export default function RestaurantAddress({ category, address }) {
  return (
    <>
      <div className="truncate ...">{category}</div>
      <div className="truncate ...">{address}</div>
    </>
  );
}

RestaurantAddress.propTypes = {
  category: propTypes.string,
  address: propTypes.string,
};

RestaurantAddress.defaultProps = {
  category:
    "Fast Food, Snacks, Beverages, Chaat, North Indian, Street Food, Sweets, Desserts, Punjabi, Bakery",
  address: "Brigade Road",
};
