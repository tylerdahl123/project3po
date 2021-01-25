import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Api from "../../utils/API"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEvents } from "./fetch"

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);



export default class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
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
    })
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
  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });
  }
  // onEventDrop = (data) => {
  //   console.log(data);
  // };
 
  render() {
    return (
      <div className="TimeTable">
        <DnDCalendar
        selectable={true}
          defaultDate={moment().toDate()}
          defaultView="day"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.moveEvent}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
          onSelectSlot={this.handleSelect}
          step={.5}
          timeslots={10}
        />
      </div>
    );
  }
}