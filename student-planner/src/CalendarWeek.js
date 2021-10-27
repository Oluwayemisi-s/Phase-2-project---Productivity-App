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
        setEvents([...events, newEntry]);
      }

    return (
        <div className="App">
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
                    center: 'dayGridMonth,dayGridWeek,timeGridDay',
                    end: 'today prev,next'
                }}
                events={events}
            />
            <FormCalendar handleNewCalendarEntry={handleNewCalendarEntry}/>
        </div>
    );
}

export default CalendarWeek