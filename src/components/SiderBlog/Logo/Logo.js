import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
const Logo = (props) => {
  const { collapsed } = props;
  const logo = collapsed ? "B" : "Malburo";
  return (
    <div className="logo">
      <Title level={4}>{logo}</Title>
    </div>
  );
};

export default Logo;
