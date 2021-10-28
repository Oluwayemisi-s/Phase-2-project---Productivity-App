import Header from "./Header"
import { useState, useEffect } from "react"
import CalendarWeek from "./CalendarWeek"
import ToDoListContainer from "./ToDoListContainer"
import { BrowserRouter } from "react-router-dom"
import PassionContent from "./PassionContent"
import PassionContentForm from "./PassionContentForm"

function App() {
  const [passion, setPassion] = useState([])
  const [passionContent, setPassionContent] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [passionForm, setPassionForm] = useState({
    focus: "",
    grateful: ""
  })

  useEffect(() => {
        fetch(`http://localhost:5000/passion`)
        .then (resp => resp.json())
        .then (data => setPassion(data))
  }, [])
  

  function handleShowPassionButtonClick (){
    console.log("i have been clicked")
    setPassionContent(current => !current)
    setShowForm(current => !current)
  }

  function handleHidePassionButtonClick (){
    console.log("i have been clicked")
    setShowForm(current => !current)
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div id="focusSection">
        {showForm ? <PassionContentForm form = {passionForm} setForm = {setPassionForm} 
        setPassion = {setPassion} setShowForm = {setShowForm}/> : <PassionContent passion = {passion}/>}        
        {passionContent ? <button id="focusSectionButton" onClick = {handleShowPassionButtonClick}>Show my Focus and gratitude for the day</button> : <button onClick = {handleHidePassionButtonClick}>Click HERE to enter a new focus and gratitude for the day!</button>}
        </div>
        <div id="calendarSection"><CalendarWeek /></div>
        <ToDoListContainer />
      </BrowserRouter>
    </div>
  )
}

export default App;
