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
          return {title: item.title, start: new Date(item.start), end: new Date(item.end), id: item._id }
        })


      const joined = this.state.events.concat(filteredEvents)
      this.setState({ events: joined },() =>{
        console.log(this.state.events);
      })
      
       
  })
    });
 
  })
}
  

onSelectEvent(event) {
  const deleteWindow = window.confirm("Would you like to delete this item?")
  if(deleteWindow === true){
 
    this.setState((res, props) => {
      const events = [...res.events]
      const index = this.state.events.indexOf(event)
      events.splice(index, 1);
      return { events };
    });
  this.handleEventDelete();
}


  }
 

handleSelect = ({ start, end }) => {
  const title = window.prompt('Add Event')
  if (title)
    this.setState({
      events: [
        ...this.state.events,
        {start,end, title }, 
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
console.log(index);
const deleteEvent = event[event.length -1];
console.log(deleteEvent);
  API.deleteEvents(deleteEvent.id)
  .then (res =>{
    console.log(res);
  })
  this.setState({})
}

 
  
  
 
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
  

          style={{ height: "75vh", width: "50vw", margin: "auto" }}

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