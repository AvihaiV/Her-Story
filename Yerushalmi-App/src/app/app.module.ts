import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NeedSomethingComponent } from './pages/need-something/need-something.component';
import { OrganizationListComponent } from './pages/organization-list/organization-list.component';
import { NewspaperComponent } from './pages/newspaper/newspaper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Contact List', component: ContactsComponent},
  { path: 'Organization List', component: OrganizationListComponent},
  { path: 'Newspaper', component: NewspaperComponent},
  { path: 'Need Something?', component: NeedSomethingComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    NeedSomethingComponent,
    OrganizationListComponent,
    NewspaperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
