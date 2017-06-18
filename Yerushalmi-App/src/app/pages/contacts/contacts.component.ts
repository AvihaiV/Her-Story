import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AF } from "../../providers/af";
import { DialogService } from "ng2-bootstrap-modal";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  public contacts: FirebaseListObservable<any>;
  public filteredList: any;

  nameList = [];
  model1: any;
  nameContact = ''; 

  constructor(public afService: AF, public db: AngularFireDatabase) {
    this.contacts = this.afService.contact;
  }

  //only user can delete himself
  deleteContact(key: string) {
    if(confirm("Are You sure you want to delete?"))
    {
      this.contacts.remove(key);
    }
  }

  ngOnInit() { }
}


