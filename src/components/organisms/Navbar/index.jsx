import propTypes from "prop-types";
import Logo from "../../atoms/Logo";
import TkCard from "../../molecules/TkCard";
import MenuList from "../../molecules/MenuList";
import "./index.css";

export default function Navbar({ items }) {
  return (
    <>
      <TkCard>
        <div className="mx-64 flex">
          <Logo />
          <MenuList items={items} />
        </div>
        <></>
      </TkCard>
    </>
  );
}

Navbar.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
};

Navbar.defaultProps = {
  items: [],
};
