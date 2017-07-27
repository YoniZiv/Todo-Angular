import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoNewModule} from "./todo-new/todo-new.module";
import {ListModule} from "./list/list.module";
import {combineReducers} from "redux";
import {NgRedux, NgReduxModule} from "@angular-redux/store";
import logger from 'redux-logger';
import {todoMdl} from "./Middlewares/todoMdl";
import {todoReducer} from "./list/todo/todo.reducer";
import {ScriptService} from "./script.service";

const rootReducer = combineReducers({
  todo: todoReducer
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    TodoNewModule,
    ListModule
  ],
  providers: [ScriptService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<any>, private url: string) {
    ngRedux.configureStore(rootReducer, {}, [todoMdl, logger]);
  }


}
