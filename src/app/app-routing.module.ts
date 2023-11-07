import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { MethodsComponent } from './methods/methods.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent,canActivate:[AuthService]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignComponent},
  // loadChildren:()=>import('./sign/sign.module')
  // .then(n=>n.SignModule)},

  {path:'menu',
  loadChildren:()=>import('./menu/menu.module')
  .then(n=>n.MenuModule)},
  {path:'Workshop',component:WorkshopComponent},
 {path:'methods',component:MethodsComponent},
 {path:'users',component:UsersComponent}
  //{path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
