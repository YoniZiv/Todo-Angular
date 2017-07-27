import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';

export const NEW_TODO = 'NEW_TODO';
export const TOGGLE = 'TOGGLE';

@Injectable()
export class Actions {

  constructor(private store: NgRedux<AppState>) {

  }

  newTodo(text) {
    console.log('We are now at Action service, newTodo method. Dispatching...');
    this.store.dispatch({
      type: NEW_TODO,
      payload: text
    });
  }

  toggleComplete(id){
    this.store.dispatch({
      type: TOGGLE,
      payload: {id}

    })
  }

}
