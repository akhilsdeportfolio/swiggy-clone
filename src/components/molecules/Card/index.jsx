import propTypes from "prop-types";

export default function TkCard({ children }) {
  return <div className="shadow-sm p-4">{children}</div>;
}

TkCard.propTypes = {
  children: propTypes.array,
};
