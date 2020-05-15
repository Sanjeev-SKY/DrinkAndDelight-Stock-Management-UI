import { HomeComponent } from './home/home.component';
import { TrackRmComponent } from './track-rm/track-rm.component';
import { UpPrStockComponent } from './up-pr-stock/up-pr-stock.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UpRmStockComponent } from './up-rm-stock/up-rm-stock.component';
import { TrackPrComponent } from './track-pr/track-pr.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'updateRM', component:UpRmStockComponent},
  {path:'updatePr', component:UpPrStockComponent},
  {path:'trackRmD', component:TrackRmComponent},
  {path:'trackPrD', component:TrackPrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }