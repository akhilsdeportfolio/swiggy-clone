import propTypes from "prop-types";

export default function HeadingList({ heading, children }) {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      {children}
    </>
  );
}

HeadingList.propTypes = {
  heading: propTypes.string,
  children: propTypes.array,
};

HeadingList.defaultProps = {
  heading: "This is the sample heading",
  children: [],
};
