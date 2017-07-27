import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoInputComponent} from './todo-input/todo-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TodoModule} from "../list/todo/todo.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoModule
  ],
  declarations: [TodoInputComponent],
  exports: [TodoInputComponent]
})
export class TodoNewModule {
}
