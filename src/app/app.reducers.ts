import { Todo } from './todo/model/todo.model';

// Unificamos todos los reducers
export interface AppState {
  todos: Todo[];
}



