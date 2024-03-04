import propTypes from "prop-types";

export default function RestautantImage({ url, showOffer, offerText }) {
  return (
    <div className="relative">
      <div className="relative rounded-xl overflow-hidden w-[273px] h-[182px]">
        <img className="w-full h-full object-cover" src={url} alt={url} />
        {showOffer && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent text-white text-lg font-bold">
            {offerText}
          </div>
        )}
      </div>
    </div>
  );
}

RestautantImage.propTypes = {
  url: propTypes.string,
  showOffer: propTypes.bool,
  offerText: propTypes.string,
};

RestautantImage.defaultProps = {
  url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ixgxvfu6ggvw1w1awgr1",
  showOffer: true,
  offerText: "100% off up to 100",
};
