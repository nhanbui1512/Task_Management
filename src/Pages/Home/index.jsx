import { PlusOutlined } from "@ant-design/icons";
import Filter from "../../components/Filter";
import Sidebar from "../../components/Sidebar";
import TaskList from "../../components/TaskList";
import TaskManager from "../../components/TaskManager";
import { Button, Popover } from "antd";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <div className="flex bg-[var(--background-light)] min-h-[100vh]">
      <Sidebar />
      <div className="py-10 px-20 w-full">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-[var(--text-main)]">
              Good Morning, Sullivan!✌
            </h3>
            <span className="text-base text-[var(--text-sub)]">
              Today, Wed 6 Jully, 2025{" "}
            </span>
          </div>

          <Filter />
        </div>

        <div className="h-[80%] mt-5">
          <TaskList />
        </div>
        <div className="flex justify-end mt-10">
          <Popover
            content={<TaskManager />}
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
