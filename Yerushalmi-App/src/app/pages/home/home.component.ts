import { Component, OnInit } from '@angular/core';
import {AngularFire,  FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af: AngularFire) {
      
  }

  ngOnInit() {
  }

}
