import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {
    
  }
  ngOnInit(): void {
      
  }
  onSelectChange(event: Event) {
    //event binding =to get the input from the user
    const selectedValue = (event.target as HTMLSelectElement).value;

    switch (selectedValue) {
      case 'cours':
        console.log('course');
        this.router.navigate(['/menu/course']); 
        break;
        case 'coursee':
        console.log('course');
        this.router.navigate(['/menu/course']); 
        break;
      case 'free':
        this.router.navigate(['/menu/free']); 
        break;
      case 'paid':
        this.router.navigate(['/menu/paid']); 
        break;
      default:
        
        break;
    }
  }
  //string interpolation one way binding
  title:string='Course'
  search:string='';
  searchbox:string[]=[];
//event binding
//   svalue:string='';
// search(eventvalue:Event){
//  this.svalue=(<HTMLInputElement>eventvalue.target).value;}
saved():any{
  if(this.searchbox){
  this.searchbox.push(this.search);
  this.search='';
  console.log(this.searchbox);
}

}
isString(item: any): boolean {
  return typeof item === 'string';
}


}

