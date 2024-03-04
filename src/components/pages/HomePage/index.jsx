import { Outlet } from "react-router-dom";
import Navbar from "../../organisms/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
