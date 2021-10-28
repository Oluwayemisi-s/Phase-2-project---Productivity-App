import ListOptions from "./ListOptions"
import { useState } from 'react'
import FormToDo from "./FormToDo"
import ListDetail from "./ListDetail"
import styled from "styled-components"

function ToDoListContainer() {
  const [list, setList] = useState([])
  const [listType, setListType] = useState([])
  const [formView, setformView] = useState(false)
  const [toDoListTitle, setToDoListTitle] = useState("Choose Your List")

  function handleDeleteEntry(deletedEntry) {
    const updatedList = list.filter((entry) => entry.id !== deletedEntry.id);
    setList(updatedList)
  }

  function handleNewEntry(newEntry) {
    setList([...list, newEntry])
  }


  function renderToDoListTitle(listType) {
    if (listType === "shortTermToDo") {
      setToDoListTitle("Short Term To Do")
    } else if (listType === "longTermToDo") {
      setToDoListTitle("Long Term To Do")
    } else if (listType === "pinned") {
      setToDoListTitle("Pinned")
    } else if (listType === "shoppingList") {
      setToDoListTitle("Shopping List")
    } else {
      setToDoListTitle("Choose Your List")
    }
  }

  return (
    // <Container>
    <div id="toDoListSection">
      <ListOptions setList={setList} setListType={setListType} setformView={setformView} renderToDoListTitle={renderToDoListTitle} />
      <div id="listAndForm">
        <h3>{toDoListTitle}</h3>
        <ul>
          {list.map(entry => <ListDetail key={entry.id} entry={entry} handleDeleteEntry={handleDeleteEntry} />)}
        </ul>
        {formView ? <FormToDo listType={listType} handleNewEntry={handleNewEntry} /> : null}
      </div>
    </div>
    // </Container>
  )
}

export default ToDoListContainer;

// const Container = styled.div`
// background-color: blue;
// `