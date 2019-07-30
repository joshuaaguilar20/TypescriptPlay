import axios from 'axios';



const url = `https://jsonplaceholder.typicode.com/todos/1`


interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const Todo = res.data as Todo;
    const { id, title, completed } = Todo;
    logTodo(id, title, completed);

}).catch(e => { console.log(e) })



const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`id: ${id}\nTitle: ${title} \nCompleated: ${completed}`)
}