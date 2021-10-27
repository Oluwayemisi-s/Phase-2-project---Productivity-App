import { Link } from "react-router-dom"

function ListOptions({ setList, setListType, setformView }) {

    function handleClick(e) {
        const listID = e.target.id
        fetch(`http://localhost:5000/${listID}`)
            .then((response) => response.json())
            .then((data) => {
                setList(data);
                setListType(listID)
                setformView(true)
            });
    };

    return (<div className="listOptions" id="listOptionsSection">
        <ul>
            <Link to={`/shortTermToDo`}>
                <li className="listOptions" id="shortTermToDo" onClick={handleClick}>Short Term To Dos</li>
            </Link>
            <Link to={`/longTermToDo`}>
                <li className="listOptions" id="longTermToDo" onClick={handleClick}>Long Term To Dos</li>
            </Link>
            <Link to={`/pinned`}>
                <li className="listOptions" id="pinned" onClick={handleClick}>Pinned Items</li>
            </Link>
            <Link to={`/shoppingList`}>
                <li className="listOptions" id="shoppingList" onClick={handleClick}>Shopping List</li>
            </Link>
        </ul>
    </div>
    )

}

export default ListOptions