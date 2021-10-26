import ListOptions from "./ListOptions"
import { useState } from 'react'

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
  </div>
}

export default ToDoListContainer;

/*
list shortterm ==> item 1 item 2 item 3
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
*/