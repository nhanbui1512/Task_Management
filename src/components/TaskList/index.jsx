import { DeleteOutlined } from "@ant-design/icons";
import { useStorage } from "../../Context/TaskContext";
import TaskItem from "../TaskItem";
import { Button, Checkbox } from "antd";
import { useState } from "react";

export default function TaskList() {
  const [isSelectAll, setIsSelectAll] = useState(false);

  const { tasks } = useStorage();
  const [selected, setSelected] = useState([]);

  const handleSelected = ({ id, checked }) => {
    setSelected((prev) => {
      const newState = [...prev];
      if (checked) {
        newState?.push(id);
        return newState;
      } else {
        return newState?.filter((item) => item !== id);
      }
    });
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    if (checked) {
      const taskIds = tasks?.map((task) => task?.id);
      setSelected(taskIds);
      setIsSelectAll(true);
    } else {
      setIsSelectAll(false);
      setSelected([]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-1 justify-end items-center gap-3">
        <Button iconPosition="end" icon={<DeleteOutlined />}>
          <span>Delete</span>
        </Button>
        <Checkbox checked={isSelectAll} onChange={handleSelectAll} />
      </div>
      {tasks?.map((task, index) => (
        <TaskItem
          id={task?.id}
          priority={task?.priority}
          taskName={task?.taskName}
          isCompleted={task?.isCompleted}
          key={index}
          isSelected={selected.includes(task?.id)}
          onSelected={handleSelected}
        />
      ))}
    </div>
  );
}
