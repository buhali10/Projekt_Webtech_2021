import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./components/video/video.component";
import {HomeComponent} from "./components/home/home.component";
import {TableComponent} from "./components/table/table.component";
import {CardComponent} from "./components/card/card.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'table', component: TableComponent},
  {path: 'card', component: CardComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
