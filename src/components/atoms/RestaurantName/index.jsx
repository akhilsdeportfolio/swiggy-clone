import propTypes from "prop-types";

export default function RestaurantName({ name }) {
  return (
    <div className="p-1 max-w-[273px]">
      <h1 className="text-lg font-bold truncate ...">{name}</h1>
    </div>
  );
}

RestaurantName.propTypes = {
  name: propTypes.string,
};

RestaurantName.defaultProps = {
  name: "Samosa Party",
};
