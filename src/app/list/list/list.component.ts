import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @select('todo') public Todos ;
  constructor() { }

  ngOnInit() {
  }

}
