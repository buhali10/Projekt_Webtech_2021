import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {VideoComponent} from "./components/video/video.component";
import {HomeComponent} from "./components/home/home.component";
import {TableComponent} from "./components/table/table.component";
import {CardComponent} from "./components/card/card.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'video', component: VideoComponent},
  {path: 'table', component: TableComponent},
  {path: 'card', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
