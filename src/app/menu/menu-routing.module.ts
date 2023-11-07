import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { FreeComponent } from './free/free.component';
import { PaidComponent } from './paid/paid.component';

const routes: Routes = [
  {path:'course',component:CourseComponent},
  {path:'free',component:FreeComponent}, 
{path:'paid',component:PaidComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
