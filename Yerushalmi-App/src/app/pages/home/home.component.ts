import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any[]>;

  constructor(private afd: AngularFireDatabase) {
    this.item = afd.object('/item');
    this.items = afd.list('items');
  }

  ngOnInit() {
  }

}
