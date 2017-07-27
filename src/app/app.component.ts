import { Component } from '@angular/core';
import {ScriptService} from "./script.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['@import "https://www.w3schools.com/w3css/4/w3.css";']
})
export class AppComponent {
  constructor(private script : ScriptService){
    this.script.load('filepicker').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }
}
