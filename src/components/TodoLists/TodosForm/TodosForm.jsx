import { useContext, useEffect, useState } from "react";
import "./TodosForm.css";
import { DataContext } from "../../../Contexts/DataContext";
const TodosForm = ({defaultData = null , closeModel}) => {
  const intialData ={
    id : '',
    todo: "",
    type: "",
    time : `${new Date().getHours()}:${new Date().getMinutes()}`
    ,date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
    done: 'false',
  }
  const {handleSetData , editData} = useContext(DataContext)
  const [data, setData] = useState(intialData);
  const handleChange = (e) => {
    setData((d) => {
      return { ...d, [e.target.name]: e.target.value};
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetData(data)
    setData({...intialData})
    closeModel()
  };
  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  } , [defaultData]);
  
  return (
    <form className="form" onSubmit={defaultData ? (e) => editData(e , data) : handleSubmit}>
      <div className="container">
        <h1>{defaultData ? 'Edit ' : 'Add New '}ToDo</h1>
        <div className="row">
          <label htmlFor="todo">Task</label>
          <input
            type="text"
            name="todo"
            id="todo"
            value={data.todo}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="row">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={data.type}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="row row-select">
          <label htmlFor="type">Done ?</label>
          <select
            name="done"
            id="done"
            defaultValue="false"
            value={data.done}
            onChange={(e) => handleChange(e)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="btn btn-form">{defaultData ? 'Edit' : 'Submit'}</button>
      </div>
    </form>
  );
};

export default TodosForm;
