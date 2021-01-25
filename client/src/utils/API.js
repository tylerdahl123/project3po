import axios from "axios";

export default {
  getEvents: function(calendarId) {
    return axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=<API_KEY_HERE>&singleEvents=true`);//the api key should be in the slack channel
  },

  getWeather: function(lati, long) {
    return axios.get(`http://api.openweathermap.org/data/2.5/uvi?lat=${lati}&lon=${long}&appid=30b6b2806250637e3cf7ca1b25aa6a9f`)
  },
  
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }, 

    getsavedEvents: function(userName){
      return axios.get("/api/events/" + userName)
    }
  // AddEvents: function(calendarId, data) {
  //   return axios.post(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=<API_KEY_HERE>`, {headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer '
  // }, data}),
  };
  // // Deletes the saved book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves an book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

