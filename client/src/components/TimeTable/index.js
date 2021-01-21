

import React from 'react'

import FullCalendar, { CalendarApi, formatDate } from '@fullcalendar/react'
import dayPlugin from '@fullcalendar/daygrid'
import timePlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import Api from "../../utils/API"


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
      <i>{res.event.body}</i>
    </div>
  )
}


export default class TimeTable extends React.Component {

  state = {
    currentEvents: []
  }



HandleDateSelect = (res) => {
  let title = prompt('What are you planning for?')
  let body = prompt("What do you need to do?")
  let CalendarApi= res.view.calendar
  CalendarApi.unselect()
  if (title) {
    CalendarApi.addEvent({
    id: createEventId(),
    title,
    body,
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
//calendarId is your email address...or it should be 
componentDidMount(){
  Api.getEvents("<YOUR_CALENDAR_ID_HERE>").then(res => {
    console.log(res.data.items);
    const editedItems = res.data.items.map(item => {
      return { title: item.summary, date: item.start.dateTime}
    })
    this.setState({ currentEvents: editedItems},()=>{
      // console.log(this.state.currentEvents)
    })
  });
//  const newEvent= {
//   "end": {
//     "date": "2021-01-21"
//   },
//   "start": {
//     "date": "2021-01-21"
//   },
//   "summary": ""
// }

// Api.AddEvents("", newEvent)




}
  
  render() {
    return (
   
          <FullCalendar
            plugins={[dayPlugin, timePlugin, interactionPlugin, googleCalendarPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            initialEvents={INITIAL_EVENTS}
            googleCalendarApikey=''
            events={this.state.currentEvents}
            
            
            select={this.HandleDateSelect} 
            handleEvents={this.handleEvents}
            eventContent={renderContent}
            
          />
       
    )
  }





}