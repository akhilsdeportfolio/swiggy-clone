import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function FallbackLoader() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <Spin indicator={<LoadingOutlined size="large" />} />
      <p>Loading ...</p>
    </div>
  );
}
