export function prioritySortTasks(tasks = [], type) {
  switch (type) {
    case true:
      tasks.sort((a, b) => a?.priority - b?.priority);
      break;
    case false:
      tasks.sort((a, b) => b?.priority - a?.priority);
      break;
    default:
      break;
  }
  return tasks;
}
