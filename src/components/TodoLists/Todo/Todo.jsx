import {BsFillTrashFill} from "react-icons/bs"
import {BsFillPencilFill} from "react-icons/bs"
import {BiCheckDouble} from "react-icons/bi"
import './Todo.css'
import { DataContext } from "../../../Contexts/DataContext";
import { useContext, useState } from "react";
import Model from "../../UI/Model/Model";
import TodosForm from "../TodosForm/TodosForm";
export const Todo = ({data}) => {
  const {handleDelete , toggleTodo} = useContext(DataContext)
  const [visible, handleSetVisible] = useState(false);
  const setVisible = () => {
    handleSetVisible(true);
  };
  const closeModel = () => {
    handleSetVisible(false);
  };

  return (
    <div className="todo">
      <div className="firstPart">
        <div className="sign" onClick={() => toggleTodo(data.id)}>
          {data.done === 'true' ? <div className="sign-icon"><BiCheckDouble width={100} /></div> : ''}
        </div>
        <div className="texts">
          <p className={data.done === 'true' ? 'done' : ''}>{data.todo}</p>
          <p>{data.time}, {data.date}, {data.type}</p>
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={() => handleDelete(data.id)}>
          <BsFillTrashFill  />
        </div>
        <div className="icon" onClick={() => {
          setVisible()
        }}>
        <BsFillPencilFill  />
        </div>
        <Model visible={visible} closeModel={closeModel}>
      <TodosForm closeModel={closeModel} defaultData={data} />
    </Model>

      </div>
    </div>
  );
};
