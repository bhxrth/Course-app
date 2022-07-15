import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseAppComponent } from './viewcourse-app/viewcourse-app.component';
const routes: Routes = [{path:"",component:ViewcourseAppComponent},
{path:'addcourse',component:AddcourseComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
