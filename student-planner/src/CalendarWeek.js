import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from "react";
import FormCalendar from "./FormCalendar"


function CalendarWeek() {

    const [events, setEvents] = useState([])

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
        //e.event.remove()
        console.log(e.event.title, e.event.start, e.event.end)
        //alert(`This is your scheduled event:\n${e.event.title} \nOn ${e.event.start}`)
    }

    return (
        <div className="App">
            <FormCalendar handleNewCalendarEntry={handleNewCalendarEntry} />

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
                //dateClick={(e) => console.log(e.dateStr)}
                eventClick={handleEventClick}
            />

        </div>
    );
}

export default CalendarWeek