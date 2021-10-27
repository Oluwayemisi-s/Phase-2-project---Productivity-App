import ListOptions from "./ListOptions"
import { useState } from 'react'
import FormToDo from "./FormToDo"

import ListDetail from "./ListDetail"

function ToDoListContainer() {
  const [list, setList] = useState([])
  const [listType, setListType] = useState([])
  const [formView, setformView] = useState(false)


  function handleDeleteEntry(deletedEntry) {
    const updatedList = list.filter((entry) => entry.id !== deletedEntry.id);
    setList(updatedList)
  }

  function handleNewEntry(newEntry) {
    setList([...list, newEntry])
  }

  return <div>
    <ListOptions setList={setList} setListType={setListType} setformView={setformView}/>
    <ul id="toDoLists">
      {list.map(entry => <ListDetail key={entry.id} entry={entry} handleDeleteEntry={handleDeleteEntry} />)}
    </ul>
    {formView ? <FormToDo listType={listType} handleNewEntry={handleNewEntry}/> : null}
  </div>
}

export default ToDoListContainer;
