import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private authServices: AuthService,private http:HttpClient) {
    
  }


 posts:any;
  ngOnInit(): void {
    this.authServices.postinfo().subscribe(data=>{
      this.posts=data;

     });
  }
    
}
