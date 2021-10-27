import Header from "./Header"
import CalendarWeek from "./CalendarWeek"
import ToDoListContainer from "./ToDoListContainer"
import { BrowserRouter } from "react-router-dom"

function App() {

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
