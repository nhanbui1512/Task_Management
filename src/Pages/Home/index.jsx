import { PlusOutlined } from "@ant-design/icons";
import Sidebar from "../../components/Sidebar";
import TaskList from "../../components/TaskList";
import TaskManager from "../../components/TaskManager";
import { Button, Popover } from "antd";
import { useState } from "react";
import { useStorage } from "../../Context/TaskContext";

export default function Home() {
  const { setTasks } = useStorage();

  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleCreateTask = (values) => {
    setTasks((prev) => [...prev, values]);
  };

  return (
    <div className="flex bg-[var(--background-light)] min-h-[100vh] flex-col">
      <Sidebar />
      <div className="py-10 px-10 w-full max-740:px-6">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-[var(--text-main)]">
              Good Morning, Sullivan!✌
            </h3>
            <span className="text-base text-[var(--text-sub)]">
              Today, Wed 6 Jully, 2025{" "}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <TaskList />
        </div>
        <div className="flex justify-end mt-10">
          <Popover
            content={<TaskManager onSubmit={handleCreateTask} />}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
            placement="bottom"
            styles={{ root: { width: 450 } }}
          >
            <Button
              style={{
                height: 40,
              }}
              type="primary"
              icon={<PlusOutlined />}
            >
              Create New Task
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  );
}
