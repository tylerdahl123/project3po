import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
let eventid= 0
let todayStr= new Date().toISOString().replace(/T.*S/,'')

const INITIAL_EVENTS=[{
  id: createEventId(),
  title: "TEST",
  start: todayStr
}]

function createEventId(){
  return String(eventid++)
}

export default class Calendar extends React.Component {

  state = {
    currentEvents: []
  }

  render() {
    return (
    
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            initialEvents={INITIAL_EVENTS} 
          
           
          />
       
    )
  }

 

}