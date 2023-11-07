import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  firstName: string = '';
  lastName: string = '';
  email: any = '';
 // console.log(firstName);
 
 constructor(private authService: AuthService, private http: HttpClient) {
  
  
 }

//  myForm: FormGroup; // Define a FormGroup

//   constructor(private fb: FormBuilder) {
//     this.myForm = this.fb.group({
//       firstName: ['', Validators.required], // Define form control with validation
//     });
//   }
submit(){

  console.log('First Name:', this.firstName);
 
  if (this.firstName !== '' && this.lastName !== '' && this.email !== '') {
    alert('Thank you for joining us');
  } else {
    alert("Please fill all fields");
  }
  
}
sign() {
 
  const body = {
    title: this.firstName,
    name: this.lastName,
    body: this.email
  };

//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log(this.myForm.value.firstName);
//     }
//   }
}
logFirstName() {
  console.log('First Name:', this.firstName);
}
}
