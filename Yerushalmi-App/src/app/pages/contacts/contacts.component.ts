import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: FirebaseListObservable<any[]>;

  constructor(private afd: AngularFireDatabase) {
    this.contacts = afd.list('contactList');
  }

  ngOnInit() { }

  insertContact(name, lastName, phone, email) {
    this.contacts.push({
      name: name.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value
    });
  }

}
