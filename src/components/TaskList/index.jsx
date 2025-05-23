import {
  DeleteOutlined,
  FileAddOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { useStorage } from "../../Context/TaskContext";
import TaskItem from "../TaskItem";
import { Button, Checkbox, Empty } from "antd";
import { useMemo, useState } from "react";
import Filter from "../Filter";
import { filterTasks } from "../../Utils/filter";
import data from "../../Context/data.sample";
import { prioritySortTasks } from "../../Utils/array";

export default function TaskList() {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [filter, setFilter] = useState(null);
  const [prioritySort, setPrioritySort] = useState(null);

  const { tasks, setTasks } = useStorage();
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

  const handleDeleteMultiTask = () => {
    setTasks((prev) => {
      let newState = [...prev];
      newState = newState.filter((item) => !selected.includes(item?.id));
      return newState;
    });
    setIsSelectAll(false);
  };

  const handleDeleteSingleTask = (id) => {
    setTasks((prev) => {
      const newState = [...prev];
      return newState.filter((task) => task?.id !== id);
    });
  };

  const handleAddSampleData = () => {
    setTasks(data);
    setIsSelectAll(false);
    setSelected([]);
  };

  let filteredTasks = useMemo(
    () => filterTasks(tasks, filter?.label),
    [filter, tasks]
  );

  if (prioritySort !== null) {
    filteredTasks = prioritySortTasks(filteredTasks, !prioritySort);
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-1 justify-between items-center gap-3 max-740:flex-col max-740:items-end">
        <div className="flex items-center gap-3 max-740:mr-[28px]">
          <Filter onChange={(val) => setFilter(val)} />
          <Button
            onClick={() => setPrioritySort(!prioritySort)}
            icon={
              prioritySort ? (
                <SortAscendingOutlined />
              ) : (
                <SortDescendingOutlined />
              )
            }
          >
            Priority
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button
            icon={<FileAddOutlined />}
            type="dashed"
            onClick={handleAddSampleData}
          >
            Add Sample Data
          </Button>
          <Button
            onClick={handleDeleteMultiTask}
            iconPosition="end"
            icon={<DeleteOutlined />}
          >
            <span>Delete</span>
          </Button>
          <Checkbox checked={isSelectAll} onChange={handleSelectAll} />
        </div>
      </div>

      <div className="flex flex-col overflow-y-scroll hide-scrollbar gap-3">
        {filteredTasks?.map((task) => (
          <TaskItem
            id={task?.id}
            priority={task?.priority}
            taskName={task?.taskName}
            isCompleted={task?.isCompleted}
            key={task?.id}
            isSelected={selected.includes(task?.id)}
            onSelected={handleSelected}
            onDelete={handleDeleteSingleTask}
            data={task}
            startTime={task?.startTime}
            endTime={task?.endTime}
          />
        ))}
      </div>
      {filteredTasks?.length === 0 && <Empty description="Not found Task" />}
    </div>
  );
}
