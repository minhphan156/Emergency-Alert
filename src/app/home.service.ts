import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class HomeService {
  constructor(private db: AngularFireDatabase) { }
  getData() {
    return this.db.list('/Reports');
  }
}
