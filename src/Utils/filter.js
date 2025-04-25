export function filterTasks(tasks = [], label = "All") {
  switch (label) {
    case "Completed":
      return tasks?.filter((task) => task.isCompleted);
    case "Pending":
      return tasks?.filter((task) => !task.isCompleted);
    case "All":
      return tasks;
    default:
      return tasks;
  }
}
