import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {TodoModule} from "./todo/todo.module";
import {Actions} from "./todo.actions";

@NgModule({
  imports: [
    CommonModule,
    TodoModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [Actions]
})
export class ListModule { }
