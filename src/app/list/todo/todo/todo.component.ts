import {Component, Input, OnInit} from '@angular/core';
import {Actions} from "../../todo.actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public logic: Actions;
  @Input ('id') id: string;
  @Input('text') text: string;
  @Input('completed') completed: string;

  constructor(logic: Actions) {
    this.logic = logic;
  }

  ngOnInit() {
  }

}
