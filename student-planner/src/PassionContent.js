import { useEffect, useState } from "react"

function PassionContent () {
    const [dayFocus, setDayFocus] = useState(null)
    const [gratitude, setGratitude] = useState(null)

    return(
        <div> 
           <form> 
               <label>Enter your focus for the day:
                <input type = "text" name = "focus"/>
                </label>
            </form>
        </div>
    )
}

export default PassionContent