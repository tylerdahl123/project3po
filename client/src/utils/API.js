import axios from "axios";

export default {
  // Gets events from the Google API
  getEvents: function(calendarId) {
    return axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=<API_KEY_HERE>&singleEvents=true`);//the api key should be in the slack channel
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Gets all saved books
  AddEvents: function(calendarId, data) {
    return axios.post(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=<API_KEY_HERE>`, {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '
  }, data});
  },
  // // Deletes the saved book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves an book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};


// 