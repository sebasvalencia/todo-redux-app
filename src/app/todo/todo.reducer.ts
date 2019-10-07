import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';


const todo1 = new Todo('Venver a tanos');
const todo2 = new Todo('Salvar al mundo');

const estadoInicial: Todo[] = [todo1, todo2];


export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo]; // creo un nuevo todo y ya se clona el state original y se agrega el nuevo todo


    default: return state;
  }

}





