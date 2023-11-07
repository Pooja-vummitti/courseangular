import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './menu/course/course.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { SignComponent } from './sign/sign.component';
import { WorkshopComponent } from './workshop/workshop.component';
//import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkshopPipe } from './workshop/workshop.pipe';
import{HttpClientModule} from '@angular/common/http';
import { MethodsComponent } from './methods/methods.component';
import { UsersComponent } from './users/users.component';
//import{StorageServiceModule} from 'angular-webstorage-service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    ErrorComponent,
    LoginComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent,
    SignComponent,
    WorkshopComponent,
    WorkshopPipe,
    MethodsComponent,
    UsersComponent,
   
   
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule,ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
