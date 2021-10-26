import { useState } from 'react'


function ListOptions({ setList }) {

    function handleClick(e) {
         const listID = e.target.id
        fetch(`http://localhost:5000/${listID}`)
            .then((response) => response.json())
            .then((data) => {
                setList(data);
            });
    };

    return (<div className="listOptions">
        <ul>
            <li className="listOptions" id="shortTermToDo" onClick={handleClick}>Short Term To Dos</li>
            <li className="listOptions" id="longTermToDo" onClick={handleClick}>Long Term To Dos</li>
            <li className="listOptions" id="pinned" onClick={handleClick}>Pinned Items</li>
            <li className="listOptions" id="shoppingList" onClick={handleClick}>Shopping List</li>
        </ul>
    </div>
    )

}

export default ListOptions