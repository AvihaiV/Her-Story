import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthProvider, AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()

export class AF {
  public displayName: string;
  public email: string;
  public status: boolean;
  public user: FirebaseListObservable<any>;
  public item: FirebaseListObservable<any>;
  public news: FirebaseListObservable<any>;
  public contacts: FirebaseListObservable<any>;
  public organizations: FirebaseListObservable<any>;
  public registeredUsers: FirebaseListObservable<any>;

  public OK_key:string;
  public storageRef : any;
  public targetRef : any;

  public currUserName : any;
  public currUserID : any;

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.targetRef = firebase.storage().ref();
    this.contacts = this.db.list("contacts");
    this.item = this.db.list("items");
    this.news = this.db.list("news");
    this.organizations = this.db.list("organizations");
  }

addItem(item){
  this.item.push({
      description: item.description,
      author : item.author,
      photoURL : item.photoURL,
      phone: item.phone,
      email: item.email
  });
}

addContacts(contacts){
  this.contacts.push({
    name: contacts.name,
    lastName: contacts.lastName,
    phone: contacts.phone,
    email: contacts.email,
    job: contacts.job,
    hobbies: contacts.hobbies
  });
}

addOrganizations(organizations){
  this.news.push({
    name: organizations.name,
    contact: organizations.contact,
    phone: organizations.phone
  });
}

addNews(news){
  this.news.push({
    paper: news.paper
  });
}

/**
* Logs in the user
* @returns {firebase.Promise<FirebaseAuthState>}
*/
loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

/**
* Logs in the user
* @returns {firebase.Promise<FirebaseAuthState>}
*/
loginWithFacebook(){
    return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
}

/**
* Logs out the current user
*/
logout() {
    return this.af.auth.signOut();
}

/**
 *
 */
addUserInfo(){
    return this.db.object('registeredUsers/' + firebase.auth().currentUser.uid).update({
        name: this.displayName,
        email: this.email,
        status: this.status = true
    });
}

  /**
   *
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email) {
    return this.db.object('registeredUsers/' + uid).update({
      name: name,
      email: email
    });
  }
    
    userLog() {
      return this.af.authState;
    }
}
