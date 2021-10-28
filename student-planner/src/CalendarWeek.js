import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from "react";
import FormCalendar from "./FormCalendar"
import EventDetail from './EventDetail';


function CalendarWeek() {

    const [events, setEvents] = useState([])
    const [eventClick, setEventClick] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/events`)
            .then((response) => response.json())
            .then((data) => {
                setEvents(data)
            });
    }, []);

    function handleNewCalendarEntry(newEntry) {
        console.log(newEntry)
        setEvents([...events, newEntry]);
    }

    function handleEventClick(e) {

        setEventClick(e)
        //console.log(e.event.start)
        //alert(`This is your scheduled event:\n${e.event.title} \nOn ${e.event.start}`)
        //console.log("title:", e.event.title, "ID:", e.event.id, "start time:", e.event.start, "end time:", e.event.end)
        //e.event.remove()
        //console.log(e.event.remove())
        //console.log(e.event)
       
    }

    function handleShowEvent (e){
        //console.log(e)
        // return(

        //     <small>{e.event.title}</small>
        // )
    }

    return (
        <div className="App" id="calendarSection">
            <FormCalendar handleNewCalendarEntry={handleNewCalendarEntry} />
            {eventClick ? <EventDetail eventClick = {eventClick} setEventClick = {setEventClick} title = {eventClick.event.title} id = {eventClick.event.id} start = {eventClick.event.startStr} end = {eventClick.event.endStr}/> : null}
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridWeek"
                customButtons={{
                    new: {
                        text: 'new',
                        click: () => console.log('new event'),
                    },
                }}
                headerToolbar={{
                    start: 'title',
                    center: 'dayGridMonth,dayGridWeek,timeGridDay new',
                    end: 'today prev,next'
                }}
                events={events}
                nowIndicator
                editable={true}
                selectable={true}
                //dateClick={(e) => console.log(e.dateStr)}
                //eventClick={handleEventClick}
                eventContent={handleShowEvent}
                eventClick={handleEventClick}
            />

        </div>
    );
}

export default CalendarWeek