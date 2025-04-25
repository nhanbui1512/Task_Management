import TaskItem from "../TaskItem";

export default function TaskList() {
  return (
    <div className="flex flex-col gap-2">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}
