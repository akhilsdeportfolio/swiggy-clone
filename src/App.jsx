import {
  PayCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./App.css";
import Logo from "./components/atoms/Logo";
import MenuList from "./components/molecules/MenuList";
import TkCard from "./components/molecules/Card";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "./features/counter/counterSlice";

function App() {
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
    },
    {
      icon: <PayCircleOutlined />,
      title: "Offers",
      key: "heart",
      showTag: true,
    },
    {
      icon: <QuestionCircleOutlined />,
      title: "Help",
      key: "help",
    },
    {
      icon: <UserOutlined />,
      title: "Sign In",
      key: "liked",
    },
    {
      icon: <ShoppingCartOutlined style={{ fontSize: 24 }} />,
      title: "Cart",
      key: "liked",
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
      </TkCard>
    </>
  );
}

export default App;
