import React from 'react'
import FullCalendar, { CalendarApi, formatDate } from '@fullcalendar/react'
import dayPlugin from '@fullcalendar/daygrid'
import timePlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
let eventid= 0
let today= new Date().toISOString().replace(/T.*S/,'')

const INITIAL_EVENTS=[{
  id: createEventId(),
  title: "TEST",
  start: today
}]




 function createEventId(){
    return String(eventid++)
}


function renderContent(res){
  return(
    <div>
      <strong>{res.timeText}</strong>
      <i>{res.event.title}</i>
    </div>
  )
}


export default class Calendar extends React.Component {

  state = {
    currentEvents: []
  }



HandleDateSelect = (res) => {
  let title = prompt('What are you planning for?')
  let CalendarApi= res.view.calendar
  CalendarApi.unselect()
  if (title) {
    CalendarApi.addEvent({
    id: createEventId(),
    title,
    start: res.startStr,
     end: res.endStr,
     allDay: res.allDay
    })
  }
};

handleEvents=(events => {
  this.setState({
    currentEvents: events
  })
})
 
  render() {
    return (
    
          <FullCalendar
            plugins={[dayPlugin, timePlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            initialEvents={INITIAL_EVENTS}
            select={this.HandleDateSelect} 
            handleEvents={this.handleEvents}
           eventContent={renderContent}
          />
       
    )
  }





}