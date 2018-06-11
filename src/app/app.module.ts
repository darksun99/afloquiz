import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
 // { path: '', component: Login  },

  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }

  ];

  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
