import { AngularFireDatabase } from 'angularfire2/database';
import { HomeService } from './../home.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { DataSnapshot} from 'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reports$; // first created this variable here
  constructor(angularData: AngularFireDatabase, homeService: HomeService) {
    this.reports$ = homeService.getData();
   }
   listDetails( compactReports: {}[], itemType: {}) {
    let result = '';
      for (const i in compactReports) {
        if ( compactReports.hasOwnProperty(i)) {
          const keys = Object.getOwnPropertyNames(compactReports[i]);
          for (let j = 0; j < keys.length - 1; j++) {
              result += '<b>' + i + '</b>'  + ': ' + compactReports[i][keys[j]] + '<br>';
          }
        }
      }
      return result;
}
}
