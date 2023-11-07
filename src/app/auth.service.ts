
import { HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private r:Router,
    private http:HttpClient){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {
    let loggedin= false;
    if(loggedin){
         return true;
    }else
    {
      this.r.navigate(['/login']);
      return false }
}
//about
   notify(){
    const headers =new HttpHeaders({
      'content-type':'application/json',
    });
  
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: headers});
   }
//sign for localstorage
  sign(body){
   const pbody={
      title:body.firstName,
      name: body.lastName,
      body: body.email,
     
    };
    this.http.post('https://jsonplaceholder.typicode.com/users',body);
  }
   //constructor(private httpClient: HttpClient){}

   //method
  getimg(url){
    console.log(url);
    const headers =new HttpHeaders({
      'content-type':'application/json',
    });
   return this.http.get(url,{headers: headers});
  }
//post in html
  postinfo(){
    const headers =new HttpHeaders({
      'content-type':'application/json',
    });
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {headers: headers});
  }
}