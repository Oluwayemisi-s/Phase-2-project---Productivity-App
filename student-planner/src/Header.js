import { useState } from "react"


function Header() {
    const [logIn, setLogIn] = useState(false)

    function handleLogIn() {
        setLogIn(currentLogIn => !currentLogIn)
    }

    return (
        <>
            <h1>Your Weekly Planner</h1>
            {logIn ? <button onClick={handleLogIn}>Log Out</button> : <button onClick={handleLogIn}>Log In</button>}
            <nav>
                <a href="#calendar">Calendar</a>
                <a href="#toDoLists">To Do Lists</a>
            </nav>

        </>
    )
}

export default Header