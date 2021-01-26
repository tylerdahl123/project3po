import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from "./fetch"
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
       API.getsavedEvents("itsalexkelly").then(res => {
      const joined = this.state.events.concat(res.data)
      this.setState({ events: joined })
      console.log("HELLO");
       
  })
    });
 
  })
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
    })
  
}
handleEventSave = () =>{
  const event = this.state.events;

const newEvent = event[event.length -1];
console.log(newEvent);
  API.saveEvent({
    userName: "tylerdahl123",
    start: new Date(newEvent.start),
    end: new Date(newEvent.end),
    title: newEvent.title
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

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
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
        <DnDCalendar
        selectable={true}
          defaultDate={moment().toDate()}
          defaultView="day"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
          onSelectSlot={this.handleSelect}
          handleEventSave={this.handleEventSave}
          step={.5}
          timeslots={10}
        />
      </div>
    );
  }
}