import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Dropdown } from "antd";
import React from "react";

const menu = {
  items: [
    {
      key: "1",
      icon: <EditOutlined />,
      label: "Edit",
      onClick: () => console.log("Chỉnh sửa"),
    },
    {
      key: "2",
      icon: <DeleteOutlined />,
      label: "Delete",
      onClick: () => console.log("Xóa"),
    },
  ],
};
export default function TaskItem() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="w-full p-2 flex bg-white rounded-md items-center shadow shadow-slate-200">
      <Checkbox onChange={onChange} />
      <p className="text-base font-semibold ml-2 flex-1 hover:text-[var(--primary-blue)] cursor-pointer">
        📚 Read a book
      </p>

      <div className="flex gap-2">
        <Button
          style={{ backgroundColor: "var(--background-light)" }}
          type="text"
          icon={<ClockCircleOutlined />}
        >
          8AM - 10AM
        </Button>
        <Dropdown menu={menu} trigger={["click"]} placement="bottomRight">
          <Button
            style={{ backgroundColor: "var(--background-light)" }}
            type="text"
            icon={<MoreOutlined />}
          />
        </Dropdown>
      </div>
    </div>
  );
}
