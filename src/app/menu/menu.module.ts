import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { CourseComponent } from './course/course.component';
import { FreeComponent } from './free/free.component';
import { PaidComponent } from './paid/paid.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    CourseComponent,
    FreeComponent,
    PaidComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,

  ],

})
export class MenuModule { }
