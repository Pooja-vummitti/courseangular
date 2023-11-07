import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstnamevalidation } from '../validation';
import{Router}from '@angular/router'
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private router: Router) {}
  time=Date.now();

  //reactiveForm= new FormGroup({});
ngOnInit(): void {
  this.reactiveForm = new FormGroup({
    firstname:new FormControl 
    ('', [ Validators.required,
      Validators.minLength(5),
      Validators.pattern("^[a-zA-Z]+$"),
     firstnamevalidation()
    ]),
    age: new FormControl ('', Validators.required),
    email:new FormControl  ('',[Validators.required, Validators.email]),
    gender: new FormControl ('male',[Validators.required]),
    timeSlot: new FormControl ('morning',[Validators.required])
  });
}
  
  submit(){
    console.log(this.reactiveForm.value);
    alert("You have joined.");
    
  }

  user=[
  {
    na:"Basic Html",
    description:"This is a basic html tutorial.",
    duration:"1 Hr",
    price:"Free",
    Day:"On sunday 11Am",
    Place:"benagluru",
  },
  {
    na:"Bootstrap",
    description:"This is a basic Boostrap tutorial.",
    duration:"1 Hr",
    price:"Free",
    Day:"On Friday 11Am",
    Place:"benagluru",
  },
 
];

  // get firstname()
  // {
  //   return this.reactiveForm.get('firstname');
  // }

  goBackToHome() {
    this.router.navigate(['/']); // Navigate to the base URL
  }
}
