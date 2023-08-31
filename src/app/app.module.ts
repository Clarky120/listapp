import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DbService } from './services/db.service';
import { ListPageComponent } from './ui/list-page/list-page.component';
import { ItemPageComponent } from './ui/item-page/item-page.component';

import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddNewListComponent } from './ui/add-new-list/add-new-list.component';
import { AddNewItemComponent } from './ui/add-new-item/add-new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    ItemPageComponent,
    AddNewListComponent,
    AddNewItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
