import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';




export const todoList = new TodoList();
// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);

// todoList.todos.forEach(todo => crearTodoHtml( todo )); es lo mismo que la linea de abajo
todoList.todos.forEach( crearTodoHtml );
console.log(todoList.todos);



/* const newTodo = new Todo('Aprender Javascript');
todoList.nuevoTodo(newTodo); */
