import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthProvider, AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";

@Injectable()

export class AF {
  public displayName: string;
  public email: string;
  public photoURL : any;
  public item: FirebaseListObservable<any>;
  public news: FirebaseListObservable<any>;
  public contact: FirebaseListObservable<any>;
  public organization: FirebaseListObservable<any>;
  public registeredUsers: FirebaseListObservable<any>;

  public OK_key:string;
  public storageRef : any;
  public targetRef : any;

  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) {
    this.targetRef = firebase.storage().ref();
    this.contact = this.db.list("contactList");
    this.item = this.db.list("items");
    this.news = this.db.list("newspaper");
    this.organization = this.db.list("organizationList");
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

  addContact(contact){
    this.contact.push({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      job: contact.job,
      hobbies: contact.hobbies,
      photoURL: contact.photoURL
    });
  }

  addOrganization(organization){
    this.organization.push({
      name: organization.name,
      contact: organization.contact,
      phone: organization.phone
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
   * save name and email of user to use
   */
  addUserInfo(user){
    this.displayName =  user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL;
  }

  /**
   * save users in DB
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email, photoURL) {
    return this.db.object('registeredUsers/' + uid).update({
      name: name,
      email: email,
      photoURL : "https://www.drupal.org/files/profile_default.jpg",
    });
  }

  //to know if user is log in or not 
  userLog() {
    return this.af.authState;
  }
}
