import { useCallback, useContext, useEffect, useState } from "react";
import { Todo } from "./Todo/Todo";
import "./TodoLists.css";
import { DataContext } from "../../Contexts/DataContext";
export const TodoLists = ({ filters }) => {
  const { data , setNumber} = useContext(DataContext);
  const [filteredData, setFiltered] = useState(data);
  useEffect(() => {
    let all ;
    if (filters === "All") {
      all = [...data];
    } else {
      all = data.filter((d) => d.done === filters);
    }
    console.log(all);
    setFiltered(d => {
      return [...all]
    });
    setNumber(filteredData.length)
      }, [data, filteredData.length, filters, setNumber]);
      console.log(filteredData);
  return (
    <div className="todolists">
      {filteredData.length ? (
          filteredData.map((d) => <Todo key={crypto.randomUUID()} data={d} />)
      ) : (
        <p className="no-data">No Tasks</p>
      )}
    </div>
  );
};
