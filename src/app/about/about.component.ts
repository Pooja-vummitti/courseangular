import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 users : any;
 constructor(private authServices: AuthService) {}
 ngOnInit(): void { 
     this.authServices.notify().subscribe(data=>{
      this.users=data;
     });
 }
}
