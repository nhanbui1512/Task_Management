import React, { useState } from "react";
import { Input, Checkbox, Select, DatePicker, Button, Badge } from "antd";
import { FileTextOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { TextArea } = Input;

const TaskManager = () => {
  const [taskName, setTaskName] = useState("");
  const [selectedList, setSelectedList] = useState(null);
  const [notes, setNotes] = useState("");
  const [priorityCount, setPriorityCount] = useState(5);
  const [checked, setChecked] = useState(false);

  const handleAddToPriority = () => {
    setPriorityCount((prev) => prev + 1);
  };

  return (
    <div className="p-4 rounded-xl shadow-md bg-white space-y-4 w-full max-w-md">
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Input
          placeholder="Create new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Select
          className="flex-1"
          placeholder="No list"
          onChange={setSelectedList}
          options={[
            { label: "Work", value: "work" },
            { label: "Personal", value: "personal" },
            { label: "Shopping", value: "shopping" },
          ]}
        />
        <DatePicker
          className="w-auto"
          disabledDate={(current) => {
            return current && current < dayjs().startOf("day");
          }}
        />
        <Button icon={<FileTextOutlined />} />
      </div>

      <TextArea
        placeholder="Add notes"
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <div className="flex items-center justify-between border-t pt-4">
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          onClick={handleAddToPriority}
        >
          Add to priority
        </Button>
        <Badge count={priorityCount} />
      </div>
    </div>
  );
};

export default TaskManager;
