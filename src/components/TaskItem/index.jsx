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
import EditTask from "../Modals/EditTask";
import dayjs from "dayjs";

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
  data,
}) {
  const { setTasks } = useStorage();
  const [isVisible, setIsVisible] = useState(true);
  const [edit, setEdit] = useState(false);

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
        onClick: () => setEdit(true),
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

  const handleUpdateTask = (values) => {
    setTasks((prev) => {
      const newState = [...prev];
      let taskIndex = newState.findIndex((task) => task?.id === values?.id);
      if (taskIndex !== -1)
        newState[taskIndex] = { ...newState[taskIndex], ...values };
      return newState;
    });
    setEdit(false);
  };

  return (
    <>
      <Grow style={{ transformOrigin: "0 0 0" }} timeout={1000} in={isVisible}>
        <div className="flex gap-3">
          <div className="w-full p-2 flex bg-white rounded-md items-center shadow shadow-slate-200 hover:bg-slate-200 transition-all col-break-point max-740:items-start">
            <div className="flex-1 flex items-center">
              <Checkbox checked={isCompleted} onChange={handleCheck} />
              <p className="text-base font-semibold mx-2 hover:text-[var(--primary-blue)] transition-all">
                {taskName}
              </p>
            </div>
            <div className="flex gap-2 items-center max-740:justify-between max-740:w-full">
              <Badge count={priority} />
              <Button
                style={{
                  backgroundColor: "var(--background-light)",
                  minWidth: 180,
                }}
                type="text"
                icon={<ClockCircleOutlined />}
              >
                {`${dayjs(startTime).format("h:mm A")} - ${dayjs(
                  endTime
                ).format("h:mm A")}`}
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

      <EditTask
        open={edit}
        onCancel={() => setEdit(false)}
        taskData={data}
        onSubmit={handleUpdateTask}
      />
    </>
  );
}
export default memo(TaskItem);
