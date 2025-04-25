import { createContext, useContext, useEffect, useState } from "react";

export const StorageContext = createContext();

export const useStorage = () => {
  return useContext(StorageContext);
};

function GlobalStates({ children }) {
  const [tasks, setTasks] = useState([]);
  const states = { tasks, setTasks };

  const saveTaskToLocalStorage = () => {
    const taskJSON = JSON.stringify(tasks);
    localStorage.setItem("task", taskJSON);
  };

  const loadTaskFromLocalStorage = () => {
    const taskJSON = localStorage.getItem("task");
    if (taskJSON) {
      const taskData = JSON.parse(taskJSON);
      setTasks(taskData);
    }
  };
  useEffect(() => {
    loadTaskFromLocalStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    saveTaskToLocalStorage();
    // eslint-disable-next-line
  }, [tasks]);

  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
