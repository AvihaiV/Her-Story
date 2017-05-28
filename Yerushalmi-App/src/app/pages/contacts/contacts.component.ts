import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app'; 
import { AF } from "../../providers/af";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  
  public contacts : FirebaseListObservable<any>;

  selected : any;
  onclick : Function;
  selectedRow : Number;

  constructor(public afService : AF) {     
    this.contacts = this.afService.contact;
  }

  //only user can delete himself
  deleteContact(key : string){
    console.log("Removing "+ key);
    this.contacts.remove(key);
  }
/*
  editContact(key : string)
  {

  }
*/
  ngOnInit(){ 
    this.onclick = function(event : MouseEvent,i : any){
      console.log(event.target);
      this.selectedRow = i;
    };
  }
}