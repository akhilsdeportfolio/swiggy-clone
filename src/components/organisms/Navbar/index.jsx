import { useDispatch, useSelector } from "react-redux";
import Logo from "../../atoms/Logo";
import TkCard from "../../molecules/Card";
import MenuList from "../../molecules/MenuList";
import { incrementByAmount } from "../../../features/counter/counterSlice";
import {
  PayCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Navbar() {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  function handleClick(key) {
    console.log(key);
    dispatch(incrementByAmount(1));
  }
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
      icon: <ShoppingCartOutlined style={{ fontSize: 24 }} />,
      title: "Cart",
      key: "shopping",
      showBadge: true,
      count: count,
      onClick: () => handleClick("liked"),
    },
  ];
  return (
    <>
      <TkCard>
        <div
          className="mx-64"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <MenuList items={items} />
        </div>
        <></>
      </TkCard>
    </>
  );
}
