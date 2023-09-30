import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService, doc, listObject } from 'src/app/services/db.service';
import { AddNewItemComponent } from '../add-new-item/add-new-item.component';

const confetti = require('canvas-confetti');

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  public newItem: string = '';
  public list!: doc;
  public deleteMode: boolean = false;

  constructor(private _db: DbService, private _router: Router, public dialog: MatDialog, private _activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.list = await this._db.getList(this._activatedRoute.snapshot.paramMap.get('id')!)
  }

  async addItemToList() {
    this.deleteMode = false;
    const dialogRef = this.dialog.open(AddNewItemComponent, {
      data: "",
    });

    //FIX THIS FOR SUBLISTS

    // dialogRef.afterClosed().subscribe(async (result) => {
    //   console.log('The dialog was closed');
    //   if (result && result !== '' && this.list) {
    //     this.list?.items.push({
    //       name: result,
    //       complete: false
    //     })

    //     await this._db.updateList(this.list)
    //   }
    // });
  }

  async deleteItem(index: number, listIndex: number) {
    this.list.lists[listIndex].items.splice(index, 1);
    this.list = await this._db.updateList(this.list);
  }

  async itemToggled(event: MatSelectionListChange, listIndex: number) {
    const item = event.options[0].value;
    if (this.list) {
      this.list.lists[listIndex].items[this.list.lists[listIndex].items.findIndex((i) => i.name === item.name)].complete = event.options[0].selected;
      this.list = await this._db.updateList(this.list)
      if (event.options[0].selected) {
        this.shoot();
      }
      this.isComplete(listIndex)
    }
  }

  isComplete(listIndex: number) {
    if (this.list?.lists[listIndex].items.filter((i) => i.complete).length === this.list?.lists[listIndex].items.length) {
      console.log('List finished');
      this.listComplete();
    }
  }

  /* Confetti stuff */

  listComplete() {
    let time = 1;
    let ctx = this;
    let interval = setInterval(function() { 
       if (time <= 5) { 
          ctx.shoot();
          time++;
       }
       else { 
          clearInterval(interval);
       }
    }, 700);
  }

  shoot() {
    try {
      this.confetti({
        angle: this.random(60, 120),
        spread: this.random(10, 50),
        particleCount: this.random(40, 50),
        origin: {
          y: 0.6
        }
      });
    } catch (e) {
      // noop, confettijs may not be loaded yet
    }
  }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  backToMainScreen() {
    this._router.navigate(['/listPage']);
  }
}
