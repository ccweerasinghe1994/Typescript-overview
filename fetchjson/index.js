'use strict';
exports.__esModule = true;
// import axios module
var axios_1 = require('axios');
// copy the url and assign the url to it
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// pass the url to axios
// this will make an http get request to that url
// this process is async so we get a promise in return
// so we call the then when there is a response
axios_1['default'].get(url).then(function (response) {
  const todo = response.data;
  const id = todo.id;
  const titile = todo.Title;
  const finished = todo.completed;
  console.log(`
    the Todo with ID:${id}.
    Has a title of ${titile}.
    is it finished ${finished}.
    `);
});
