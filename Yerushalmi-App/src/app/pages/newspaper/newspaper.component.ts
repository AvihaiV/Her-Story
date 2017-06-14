import { Component, OnInit } from '@angular/core';
import {BrowserModule, DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})

export class NewspaperComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;
  
  constructor() {
    /*
      this.innerHeight = (screen.availHeight) + "px";
      this.innerWidth = (screen.availWidth) + "px";
  */
  }

  ngOnInit() {
  }

}
