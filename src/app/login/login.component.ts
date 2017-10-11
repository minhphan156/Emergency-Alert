import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = null;

  constructor() { 
    
  }

  ngOnInit() {
  }

 
}
