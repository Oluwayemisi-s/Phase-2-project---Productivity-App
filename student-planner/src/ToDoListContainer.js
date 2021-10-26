import ListOptions from "./ListOptions"
import { useState } from 'react'
import FormToDo from "./FormToDo"

import ListDetail from "./ListDetail"

function ToDoListContainer() {
  const [list, setList] = useState([])


  function handleDeleteEntry(deletedEntry) {
    const updatedList = list.filter((entry) => entry.id !== deletedEntry.id);
    setList(updatedList)
  }

  return <div>
    <ListOptions setList={setList} />
    <ul>
      {list.map(entry => <ListDetail key={entry.id} entry={entry} handleDeleteEntry={handleDeleteEntry} />)}
    </ul>
    <FormToDo />
  </div>
}

export default ToDoListContainer;
