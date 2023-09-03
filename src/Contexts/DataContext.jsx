import { createContext, useCallback, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [number, setNumber] = useState(
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data")).length
      : 0
  );
  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  const handleSetData = useCallback(
    (newData) => {
      const settingData = [...data, { ...newData, id: crypto.randomUUID() }];
      setData(settingData);
      localStorage.setItem("data", JSON.stringify(settingData));
      setNumber(JSON.parse(localStorage.getItem("data")).length);
    },
    [data]
  );
  useEffect(() => {
    console.log(number);
  }, [number]);
  const handleDelete = useCallback(
    (id) => {
      const settingData = data.filter((d) => d.id !== id);
      setData(settingData);
      localStorage.setItem("data", JSON.stringify(settingData));
      setNumber(JSON.parse(localStorage.getItem("data")).length);
    },
    [data]
  );
  const editData = (e, newData) => {
    e.preventDefault();
    console.log(newData.id);
    let nD = [...data];
    nD = nD.map((d) => {
      if (d.id == newData.id) {
        return {
          ...d,
          todo: newData.todo,
          type: newData.type,
          done: newData.done,
        };
      }
      return d;
    });
    setData(nD);
    localStorage.setItem("data", JSON.stringify(nD));
    setNumber(JSON.parse(localStorage.getItem("data")).length);
  };
  const toggleTodo = (id) => {
    let nD = [...data]
    nD = nD.map(d => {
      if (d.id === id) {
        if (d.done === 'false') {
          return {...d , done : 'true'}
        }
        if (d.done === 'true') {
          return {...d , done : 'false'}
        }
      }
      return d
    })
    setData(nD)
    localStorage.setItem("data", JSON.stringify(nD));
    setNumber(JSON.parse(localStorage.getItem("data")).length);

  }

  return (
    <DataContext.Provider
      value={{ handleSetData, data, handleDelete, editData , toggleTodo , setNumber , number }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
