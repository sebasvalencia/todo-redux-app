import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import { filtrosValidos } from './filter/filter.actions';

// Unificamos todos los reducers
export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

// creamos una const que tiene la combinacion de todos los reducers
export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.filtroReducer
};
