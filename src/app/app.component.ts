import { Component, OnInit } from '@angular/core';
import { DbService } from './services/db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'listapp';
  public dbService: DbService;

  constructor(_db: DbService) {
    this.dbService = _db;
   }

  ngOnInit(): void {
    this.dbService.connectToDB();
  }
}
