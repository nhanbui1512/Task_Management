import {
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Badge, Button, Checkbox, Dropdown } from "antd";
import { memo, useState } from "react";
import { useStorage } from "../../Context/TaskContext";
import Grow from "@mui/material/Grow";

function TaskItem({
  id,
  taskName = "📚 Read a book",
  isCompleted = false,
  priority = 1,
  startTime = "8AM",
  endTime = "10AM",
  isSelected = false,
  onSelected,
  onDelete,
}) {
  const { setTasks } = useStorage();
  const [isVisible, setIsVisible] = useState(true);

  const handleCheck = (e) => {
    setTasks((prev) => {
      const newState = [...prev];
      const task = newState?.find((task) => task?.id === id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
      return newState;
    });
  };

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onDelete) return onDelete?.(id);
    }, 1000);
  };

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
        onClick: handleDelete,
      },
    ],
  };

  const handlSelected = (e) => {
    if (onSelected) return onSelected({ checked: e.target.checked, id });
  };

  return (
    <Grow style={{ transformOrigin: "0 0 0" }} timeout={1000} in={isVisible}>
      <div className="flex gap-3">
        <div className="w-full p-2 flex bg-white rounded-md items-center shadow shadow-slate-200 hover:bg-slate-200 transition-all cursor-pointer">
          <Checkbox checked={isCompleted} onChange={handleCheck} />
          <p className="text-base font-semibold ml-2 flex-1 hover:text-[var(--primary-blue)] cursor-pointer transition-all">
            {taskName}
          </p>

          <div className="flex gap-2 items-center">
            <Badge count={priority} />
            <Button
              style={{ backgroundColor: "var(--background-light)" }}
              type="text"
              icon={<ClockCircleOutlined />}
            >
              {`${startTime} - ${endTime}`}
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
        <Checkbox onChange={handlSelected} checked={isSelected} />
      </div>
    </Grow>
  );
}
export default memo(TaskItem);
