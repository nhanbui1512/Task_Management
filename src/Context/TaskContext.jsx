import { createContext, useContext, useState } from "react";

export const StorageContext = createContext();

export const useStorage = () => {
  return useContext(StorageContext);
};

function GlobalStates({ children }) {
  const [tasks, setTasks] = useState([]);
  const states = { tasks, setTasks };
  return (
    <StorageContext.Provider value={states}>{children}</StorageContext.Provider>
  );
}

export default GlobalStates;
