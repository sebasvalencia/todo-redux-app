import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', {static: false}) txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log(this.todo);

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( value => {
      console.log(value);
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });

  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

  }

}
