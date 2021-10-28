import PassionContentDetail from "./PassionContentDetail"

function PassionContent ({passion}) {
    console.log(passion)
    const pass = passion.map(item => <PassionContentDetail key = {item.id} item = {item}/>)

    return(
        <div> 
            {pass}
        </div>
    )
}

export default PassionContent