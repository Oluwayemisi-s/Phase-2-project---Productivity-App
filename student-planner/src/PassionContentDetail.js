

export default function PassionContentDetail ({item}){

    return (
        <div id="focusDetail"> 
            <h3 className="focusDetailTextFocus">Focus: {item.focus}</h3>
            <h3 className="focusDetailTextGratitude">Gratitude: {item.grateful}</h3>
        </div>
        )
}