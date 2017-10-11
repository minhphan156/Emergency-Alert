import { AngularFireDatabase } from 'angularfire2/database';
import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { DataSnapshot} from 'firebase/database';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reports$; //first created this variable here
  a: string[];

  constructor(angularData: AngularFireDatabase,homeService: HomeService) {
    this.reports$ = homeService.getData(); 
   }
   listDetails( compactReports : {}[] ) {
    let result : string = "";
    for (let i in compactReports) {
        let keys = Object.getOwnPropertyNames(compactReports[i]);
        console.log(i);
        for (let j = 0; j < keys.length; j++) {
            result += "<b>" +i+"</b>" + ": " + compactReports[i][keys[j]] + "<br>";
        }
    }
    return result;
}
  ngOnInit() {
  }
 
}
