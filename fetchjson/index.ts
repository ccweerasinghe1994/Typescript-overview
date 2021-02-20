// import axios module
import axios from 'axios';

// copy the url and assign the url to it
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interfaces are used in typescript to describe an object
interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}


// pass the url to axios
// this will make an http get request to that url
// this process is async so we get a promise in return
// so we call the then when there is a response
axios.get(url).then(response => {
    const todo = response.data as ToDo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logToDo(id,title,completed)

})

// creating a new function to log the data
const logToDo = (id: number, title: string, completed: boolean) => {
    console.log(`
    the Todo with ID:${id}.
    Has a title of ${title}.
    is it completed ${completed}.
    `);
}