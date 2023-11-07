import { Component,OnInit,Input, inject} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//two way binding
export class LoginComponent implements OnInit {
  loginArray:any={};
  username: string = 'pooja';
  password: string = '1234';
  @Input('username') user:any;
  @Input('password') pass:any;
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
      
  }
  onLoginButtonClick() {
    //localstorage
     localStorage.setItem('username',JSON.stringify(this.user));
     localStorage.setItem('pass',JSON.stringify(this.pass));
    //localStorage.setItem('login',JSON.stringify(this.localArray));
    if (this.username === this.user&&this.password === this.pass) {
      //console.log('entered');
      this.router.navigate(['/menu/course']);
    
    } else {
      alert("Sorry, wrong password");
          this.router.navigate(['./login']);
     
    }

  }

  onLogoutclick(){
    // localStorage.removeItem('username');
    // localStorage.removeItem('pass');
    localStorage.clear()
  }


 



 
}

