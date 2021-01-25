
import request from "superagent";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const CALENDAR_ID_UNIQUE = process.env.REACT_APP_CALENDAR_ID;
const CALENDAR_ID = localStorage.getItem("email");



let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/<CALENDAR_ID>/events?key=<API_KEY>&singleEvents=true`;

    export function getEvents(callback) {
  request.get(GOOGLE_CALENDAR_URL).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        return events.push({
          start: new Date(event.start.dateTime.toString()),
          end: new Date(event.end.dateTime.toString()),
          title: event.summary
        });
      });
      callback(events);
    }
  });
}