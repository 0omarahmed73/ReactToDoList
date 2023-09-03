import { useState } from "react";
import Model from "../Model/Model";
import "./Buttons.css";
import TodosForm from "../../TodoLists/TodosForm/TodosForm";
import { TodoLists } from "../../TodoLists/TodoLists";
export const Buttons = () => {
  const [filters , setFilters] = useState('All');
  const [visible, handleSetVisible] = useState(false);
  const setVisible = () => {
    handleSetVisible(true);
  };
  const closeModel = () => {
    handleSetVisible(false);
  };

  return (
    <>
      <div className="buttons">
        <button className="btn" onClick={setVisible}>
          Add Task
        </button>
        <select name="type" id="type" onChange={(e) => setFilters(e.target.value)}>
          <option value="All">All</option>
          <option value="false">Incomplete</option>
          <option value="true">Complete</option>
        </select>
      </div>
      <Model visible={visible} closeModel={closeModel}>
        <TodosForm closeModel={closeModel} />
      </Model>
      <TodoLists filters={filters}/>
    </>
  );
};
