import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DbService, listObject } from 'src/app/services/db.service';
import { AddNewListComponent } from '../add-new-list/add-new-list.component';
import { DeleteCheckComponent } from '../delete-check/delete-check.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {
  lists: any[] = [];
  loading: boolean = false;
  deleteMode: boolean = false;

  constructor(private _db: DbService, private _router: Router, public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.lists = await this._db.getAllLists();
    this.loading = false;
  }

  async addList() {
    this.deleteMode = false;
    const dialogRef = this.dialog.open(AddNewListComponent, {
      data: "",
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('The dialog was closed');
      if (result && result !== '') {
        await this._db.createList(result);
        this.lists = await this._db.getAllLists();
      }
    });
  }

  async deleteItem(list: any) {
    const dialogRef = this.dialog.open(DeleteCheckComponent, {
      data: { id: list.id },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      console.log('The dialog was closed');
      if (result) {
        await this._db.deleteList(list);
        this.lists = await this._db.getAllLists();
      }
    });
  }

  openList(list: listObject) {
    this._db.setActiveList(list);
    this._router.navigate(['/itemPage', list.key]);
  }
}
