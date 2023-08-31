import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './ui/list-page/list-page.component';
import { ItemPageComponent } from './ui/item-page/item-page.component';

const routes: Routes = [
  {
    path: "listPage", component: ListPageComponent
  },
  { path: '', redirectTo: '/listPage', pathMatch: 'full' },
  {
    path: "itemPage/:id", component: ItemPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
