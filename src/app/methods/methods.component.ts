import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
  constructor(private authServices: AuthService,private http:HttpClient) {
    
  }
  from_index:any=1;
  to_index:any=5;
  total_records:any=1;
  total_pages:any= 1;
  pagination:any=5;
  current_page:any =1;

 img: any;
  ngOnInit(): void {
    this.getimg();
    // this.authServices.getimg('url').subscribe(data=>{
    //   this.img=data;
    // });
  }
    previousPage() {
      if (this.current_page > 1) {
        this.current_page--;
        this.getimg()
        this.from_index = ((this.current_page - 1) * this.pagination) + 1
        this.to_index = (this.current_page * this.pagination) 
      }
    }
  
    nextPage() {
      if (this.current_page != this.total_pages && this.to_index != this.total_records) {
        this.current_page++;
        this.getimg()
        this.from_index = ((this.current_page - 1) * this.pagination) + 1
        this.to_index = (this.current_page * this.pagination)
        if (this.to_index > this.total_records) {
          this.to_index = this.total_records;
        }
      }
    }
    
    getPageRange() {
      this.from_index = ((this.current_page - 1) * this.pagination) + 1
      this.to_index = (this.current_page * this.pagination)
      this.total_pages = Math.ceil(this.total_records / this.pagination)
      if (this.to_index > this.total_records) {
        this.to_index = this.total_records;
      }
      if (this.to_index === 0) { this.from_index = 0 }
    }

    getimg() {
      let params = "per_page="+this.pagination+"&page="+this.current_page;
      const headers =new HttpHeaders({
        'content-type':'application/json',
      });
    
     this.http.get('https://reqres.in/api/users?'+params, {headers: headers})
      //this.authServices.getimg('/api/users?page=2'+"?"+params)
      .subscribe((res: any) => {

        console.log('response', res);
        this.img = res['data']; 
        this.total_records = res['total']; 
        this.getPageRange();
     
        // this.total_records = res['data']['total_records']
       
      }, (error: any) => {
      
        console.log('error', error);
      })
    }
  
}

