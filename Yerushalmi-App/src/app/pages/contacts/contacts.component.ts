import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase/app'; 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  
  public items : FirebaseListObservable<any>;

  constructor(private afd: AngularFireDatabase) {     
      this.items = this.afd.list("contactList");
  }

  /*
  insertContact(name, lastName, phone, email, job, hobbies) {
    this.contacts.push({
      name: name.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      job: job.value,
      hobbies: hobbies.value
    });
  }

  deleteItem(key : string){
    this.items.remove(key);
  }
*/
  ngOnInit(){ }

}
