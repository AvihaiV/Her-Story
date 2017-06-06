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


  constructor(public afService: AF, public db: AngularFireDatabase) {
    this.contacts = this.afService.contact;
  }

  getFilteredNames(name) {
    this.filteredList = this.getFilteredList(name);
  };

  getFilteredList(name): Observable<any[]> {
    //if (name == undefined || name == "" || name == "(none)")
    if (!name)
      return this.db.list("contactList");

    else
      return this.db.list('contactList').map(_user => _user.filter(user => user.name == name))
  };


  clearInput() {
    this.model1 = "";
    this.getFilteredNames("");
  };

  //only user can delete himself
  deleteContact(key: string) {
    if(confirm("Are You sure you want to delete?"))
    {
      this.contacts.remove(key);
    }
  }

  ngOnInit() {
    firebase.database().ref("contactList/").orderByValue().on("value", (data) => {
      data.forEach((snap) => {
        if (snap.val().name != "" && snap.val().name != undefined)
          this.nameList.push(snap.val().name);
        return false;
      });
    });
    this.getFilteredNames("");
  }
}

