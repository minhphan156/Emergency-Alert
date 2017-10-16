import { AngularFireDatabase } from 'angularfire2/database';
import { HomeService } from './../home.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { DataSnapshot} from 'firebase/database';
import { Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
  reports$; // first created this variable here

  @Input() text: string;
  @Input() maxLength: number = 100;
  currentText: string;
  hideToggle: boolean = true;
  public isCollapsed: boolean = true;
  
  constructor(angularData: AngularFireDatabase, homeService: HomeService, elementRef: ElementRef) {
    this.reports$ = homeService.getData();
   }
   listDetails( compactReports: {}[], itemType: {}) {
    let result = '';
  //    if (itemType === 'feed-weather') {
  //   for (const i in compactReports) {
  //     if ( compactReports.hasOwnProperty(i) && i === 'detail') {
  //       const keys = Object.getOwnPropertyNames(compactReports[i]);
  //       for (let j = 0; j < keys.length - 1; j++) {
  //           result += '<b>' + i + '</b>'  + ': ' + compactReports[i][keys[j]] + '<br>';
  //       }

  //     }
  //   }
  //   return result;
  // }else {
      for (const i in compactReports) {
        if ( compactReports.hasOwnProperty(i)) {
          const keys = Object.getOwnPropertyNames(compactReports[i]);
          for (let j = 0; j < keys.length - 1; j++) {
              result += '<b>' + i + '</b>'  + ': ' + compactReports[i][keys[j]] + '<br>';
          }
        }
      }
      return result;
    //}
}

toggleView() {
  this.isCollapsed = !this.isCollapsed;
  this.determineView();
}
determineView() {
  if (this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
  }
  this.hideToggle = false;
  if (this.isCollapsed == true) {
      this.currentText = this.text.substring(0, this.maxLength) + "...";
  } else if(this.isCollapsed == false)  {
      this.currentText = this.text;
  }

}
ngOnChanges() {
  this.determineView();       
  
}

}
  
