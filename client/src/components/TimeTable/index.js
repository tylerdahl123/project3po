import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from "./fetch";
import API from "../../utils/API";
const userName = localStorage.getItem("email");
// const userName = localStorage.getItem(userInfo.email)
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);



export default class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
   
   
  }
//get events from google then join it with my database
//get the email form the google auth or have them input the user name to pass into the calls
//grab the email...save it into local storage then pass that into for userName
  componentDidMount() {
    
    getEvents(events => {
      this.setState({ events },() => {
       API.getsavedEvents(userName).then(res => {
        const filteredEvents = res.data.map(item => {
          return {title: item.title, start: new Date(item.start), end: new Date(item.end) }
        })


      const joined = this.state.events.concat(filteredEvents)
      this.setState({ events: joined },() =>{
        console.log(this.state.events);
      })
      
       
  })
    });
 
  })
}
  

onSelectEvent(Events) {
  const r = window.confirm("Would you like to remove this event?")
  if(r === true){
 
    this.setState((previous, props) => {
      const events = [...previous.events]
      const idx = this.state.events.indexOf(Events)
      events.splice(idx, 1);
      return { events };
    });
  this.handleEventDelete();
}


  }
 

handleSelect = ({ start, end }) => {
  const title = window.prompt('New Event name')
  if (title)
    this.setState({
      events: [
        ...this.state.events,
        {
          start,
          end,
          title,
          
        }, 
      ],
        
    }, () => {
      this.handleEventSave();
      this.handleEventDelete();
     
    })
  
}
handleEventSave = () =>{
  const event = this.state.events;

const newEvent = event[event.length -1];
console.log(newEvent);
  API.saveEvent({
    userName: userName,
    start: new Date(newEvent.start),
    end: new Date(newEvent.end),
    title: newEvent.title
  })
  this.setState({})
}


handleEventDelete = (index) =>{
  const event = this.state.events;

const deleteEvent = event[event.length -1];
console.log(deleteEvent);
  API.deleteEvents({
    userName: userName,
    start: Date(deleteEvent.start),
    end: Date(deleteEvent.end),
    title: deleteEvent.title,
    index: index,
  })
  this.setState({})
}
// getEvents = () => {
//   API.getEvents(this.state.q)
//     .then(res =>
//       this.setState({
//         events: res.data
//       })
//     )
//     .catch(() =>
//       this.setState({
//         events: [],
//         message: "No New Books Found, Try a Different Query"
//       })
//     );
// };
//loop through events where title of event matches the title of the selected event then replace the zeros with the index number
  onEventResize = (data) => {
  
    const { start, end} = data;
    const {title} = data.event;
    
    
console.log(title);
    this.setState((state) => {
      state.events[145].start = start;
      state.events[145].end = end;
     
      return { events: [...state.events] };
    });
  };
  // moveEvent({ event, start, end }) {
  //   const { events } = this.state;

  //   const idx = events.indexOf(event);
  //   const updatedEvent = { ...event, start, end };

  //   const nextEvents = [...events];
  //   nextEvents.splice(idx, 1, updatedEvent);

  //   this.setState({
  //     events: nextEvents
  //   });
  // }
  onEventDrop = (data) => {
    console.log(data);
  };
 
  render() {
    return (
      <div className="TimeTable">
        <Calendar
        selectable={true}
          defaultDate={moment().toDate()}
          defaultView="day"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          onSelectEvent = {event => this.onSelectEvent(event)} 
          style={{ height: "100vh" }}
          onSelectSlot={this.handleSelect}
          handleEventSave={this.handleEventSave}
          handleEventDelete={this.handleEventDelete}
          step={.5}
          timeslots={10}
        />
      </div>
    );
  }
}