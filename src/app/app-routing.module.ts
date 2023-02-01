import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodasComponent } from './bodas/bodas.component';
import { HomeComponent } from './home/home.component';
import { MainCoursesComponent } from './menu/main-courses.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path:"menu", component:MainCoursesComponent},
  {path: "bodas", component:BodasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
