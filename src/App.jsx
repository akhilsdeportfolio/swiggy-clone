import {
  PayCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./App.css";
import Logo from "./components/atoms/Logo";
import MenuList from "./components/molecules/MenuList";
import TkCard from "./components/molecules/Card";

function App() {
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
  ];
  return (
    <>
      <TkCard>
        <div
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
