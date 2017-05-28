import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app'; 
import { AF } from "../../providers/af";

@Component({
  selector: 'app-need-something',
  templateUrl: './need-something.component.html',
  styleUrls: ['./need-something.component.css']
})
export class NeedSomethingComponent implements OnInit {
 
  public items : FirebaseListObservable<any>;

  constructor(public afService : AF) {     
    this.items = this.afService.item;
  }

  //only user can delete himself
  deleteItem(key : string){
    console.log("Removing "+ key);
    this.items.remove(key);
  }

  ngOnInit(){ }
}
