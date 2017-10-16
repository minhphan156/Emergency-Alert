import { HomeService } from './home.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SettingComponent} from './setting/setting.component';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { OfficerComponent } from './officer/officer.component';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
  declarations: [
    SettingComponent,
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    OfficerComponent,
    DispatcherComponent,
    ReadMoreComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: 'setting', component: SettingComponent },
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent }
      
      
    ])
    
   
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
