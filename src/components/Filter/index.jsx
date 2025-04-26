import React, { memo, useState } from "react";
import {
  AlignLeftOutlined,
  CheckSquareOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";

function Filter({ onChange }) {
  const handleMenuClick = (e) => {
    setChoosed(items[e.key].label);
    if (onChange) return onChange(items[e.key]);
  };

  const items = [
    {
      label: "All",
      key: 0,
      icon: <AlignLeftOutlined />,
    },
    {
      label: "Pending",
      key: 1,
      icon: <LoadingOutlined />,
    },
    {
      label: "Completed",
      key: 2,
      icon: <CheckSquareOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const [choosed, setChoosed] = useState("All");

  return (
    <Dropdown.Button
      data-testid="filter-button"
      style={{
        width: "fit-content",
      }}
      menu={menuProps}
    >
      <span className="w-[80px]">{choosed}</span>
    </Dropdown.Button>
  );
}
export default memo(Filter);
