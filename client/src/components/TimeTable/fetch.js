
import request from "superagent";


let GOOGLE_CALENDAR_URL = `https://www.googleapis.com/calendar/v3/calendars/<CALENDAR_API>/events?key=<API_KEY>singleEvents=true`;

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
