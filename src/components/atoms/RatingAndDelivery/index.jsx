import { Rate } from "antd";
import propTypes from "prop-types";

export default function RatingAndDelivery({ rating, deliveryTime }) {
  return (
    <div className="max-w-[273px] flex flex-row !justify-start items-center">
      <Rate value={1} count={1} className="text-green-500 p-1" />
      <h1 className="font-bold">
        {rating} . {deliveryTime}
      </h1>
    </div>
  );
}

RatingAndDelivery.propTypes = {
  rating: propTypes.string,
  deliveryTime: propTypes.string,
};

RatingAndDelivery.defaultProps = {
  rating: "4.0",
  deliveryTime: "35-40 mins",
};
