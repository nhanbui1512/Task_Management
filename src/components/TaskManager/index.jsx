import React, { useState } from "react";
import {
  Input,
  Checkbox,
  Select,
  DatePicker,
  TimePicker,
  Button,
  Badge,
  Form,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { TextArea } = Input;

const TaskManager = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [priorityCount, setPriorityCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleAddToPriority = () => {
    setPriorityCount((prev) => prev + 1);
  };

  const resetForm = () => {
    form.resetFields();
    setChecked(false);
    setPriorityCount(0);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const {
        taskName,
        selectedList,
        notes,
        selectedDate,
        startTime,
        endTime,
      } = values;

      if (startTime.isAfter(endTime)) {
        form.setFields([
          {
            name: "endTime",
            errors: ["End time cannot be before start time."],
          },
        ]);
        return;
      }

      if (onSubmit) {
        const id = crypto.randomUUID();

        onSubmit({
          taskName,
          selectedList,
          notes,
          startTime,
          endTime,
          id: id,
          isCompleted: checked,
          date: new Date(selectedDate).toISOString(),
          priority: priorityCount,
        });
        resetForm();
      }
    } catch (errorInfo) {}
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className="p-4 rounded-xl shadow-md bg-white space-y-4 w-full max-w-md"
    >
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Form.Item
          name="taskName"
          rules={[{ required: true, message: "Task name is required." }]}
          className="flex-1 m-0"
        >
          <Input placeholder="Create new task" />
        </Form.Item>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Form.Item
          name="selectedList"
          className="flex-1 m-0"
          rules={[{ required: true, message: "Please select a list." }]}
        >
          <Select
            placeholder="No list"
            options={[
              { label: "Work", value: "work" },
              { label: "Personal", value: "personal" },
              { label: "Shopping", value: "shopping" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="selectedDate"
          className="m-0"
          rules={[{ required: true, message: "Please select a date." }]}
        >
          <DatePicker
            className="w-auto"
            disabledDate={(current) =>
              current && current < dayjs().startOf("day")
            }
          />
        </Form.Item>
      </div>

      <div className="flex items-center space-x-2">
        <Form.Item
          name="startTime"
          className="flex-1 m-0"
          rules={[{ required: true, message: "Please select start time." }]}
        >
          <TimePicker
            className="w-full"
            placeholder="Start time"
            format="HH:mm"
          />
        </Form.Item>
        <span>to</span>
        <Form.Item
          name="endTime"
          className="flex-1 m-0"
          rules={[{ required: true, message: "Please select end time." }]}
        >
          <TimePicker
            className="w-full"
            placeholder="End time"
            format="HH:mm"
          />
        </Form.Item>
      </div>

      <Form.Item name="notes" className="m-0">
        <TextArea placeholder="Add notes" rows={4} />
      </Form.Item>

      <div className="flex items-center justify-between border-t pt-4">
        <Button
          type="dashed"
          icon={<PlusOutlined />}
          onClick={handleAddToPriority}
        >
          Add to priority
        </Button>
        <Badge count={priorityCount} />

        <Button type="primary" onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </Form>
  );
};

export default TaskManager;
