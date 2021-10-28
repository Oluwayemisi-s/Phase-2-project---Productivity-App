import Header from "./Header"
import { useEffect } from "react"
import CalendarWeek from "./CalendarWeek"
import ToDoListContainer from "./ToDoListContainer"
import { BrowserRouter } from "react-router-dom"

function App() {

useEffect(() => {
  
}, [])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <CalendarWeek />
        <ToDoListContainer />
      </BrowserRouter>
    </div>)
}

export default App;
