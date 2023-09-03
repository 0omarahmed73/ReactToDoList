import { Buttons } from "./components/UI/Buttons/Buttons"
import { TodoLists } from "./components/TodoLists/TodoLists"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "./Contexts/DataContext"

export const App = () => {
  const { number} = useContext(DataContext)
  // const [number, setNumber] = useState(
  //   localStorage.getItem("data")
  //     ? JSON.parse(localStorage.getItem("data")).length
  //     : 0
  // );
  // useEffect(() => {
  //   setNumber(data.length)
  // } , [data])
  return (
    <div className="App">
      <div className="container">
      <h1>TODO LIST <span>[{number ? number : 0}]</span></h1>
      <div className="part">
      <Buttons/>
      </div>
      </div>
    </div>
  )
}
