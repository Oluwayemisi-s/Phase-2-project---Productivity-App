import { useState } from "react"


function Header() {
    const [logIn, setLogIn] = useState(false)

    function handleLogIn() {
        setLogIn(currentLogIn => !currentLogIn)
    }

    return (
        <>
            {logIn ? <button className="loginButton" onClick={handleLogIn}>Log Out</button> : <button className="loginButton" onClick={handleLogIn}>Log In</button>}
            <div id="header">
                <h1>Weekly Productivity Planner</h1>
                <nav>
                    <a href="#focusSection">Focus ○ </a>
                    <a href="#calendarSection">Calendar ○ </a>
                    <a href="#toDoListSection">To Do Lists</a>
                </nav>
            </div>
        </>
    )
}

export default Header