import { Outlet } from "react-router-dom";
import {
  PayCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navbar from "../../organisms/Navbar";
import { useSelector } from "react-redux";

export default function HomeTemplate() {
  const count = useSelector((store) => store.counter.count);
  const items = [
    {
      icon: <SearchOutlined />,
      title: "Search",
      key: "search",
      path: "search",
    },
    {
      icon: <PayCircleOutlined />,
      title: "Offers",
      key: "heart",
      showTag: true,
      path: "offers",
    },
    {
      icon: <QuestionCircleOutlined />,
      title: "Help",
      key: "help",
      path: "help",
    },
    {
      icon: <UserOutlined />,
      title: "Sign In",
      key: "liked",
      path: "login",
    },
    {
      icon: <ShoppingCartOutlined />,
      title: "Cart",
      key: "shopping",
      showBadge: true,
      path: "cart",
      count: count,
    },
  ];

  return (
    <>
      <Navbar items={items} />
      <Outlet />
    </>
  );
}

HomeTemplate.propTypes = {};
HomeTemplate.defaultProps = {};
