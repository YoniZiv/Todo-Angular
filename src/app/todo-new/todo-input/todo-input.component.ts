import {Component, OnInit} from '@angular/core';
import {Actions} from "../../list/todo.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

//
// public loginForm: FormGroup;
// public auth: Actions;
//
// @select('user') public user;
//
// constructor(fb: FormBuilder,  auth: Actions) {
//   this.auth      = auth;
//   this.loginForm = fb.group({
//     email   : null,
//     password: null,
//   });
// }
//
// ngOnInit() {
// }


export class TodoInputComponent implements OnInit {

  public todoForm: FormGroup;
  public logic: Actions;


  constructor(fb: FormBuilder, logic: Actions) {

    this.logic = logic;
    this.todoForm = fb.group({
      text: ['', Validators.required]
    });

  }

  public AddTodo() {
    if (this.todoForm.get('text').value !== '' && this.todoForm.get('text').value !== null) {
      this.logic.newTodo(this.todoForm.value);
      this.todoForm.reset();
    }
  }

  ngOnInit() {
  }

}
