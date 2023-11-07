import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  goBackToHome() {
    this.router.navigate(['/']); // Navigate to the base URL
  }
//getitem local storage
  getUsername(): string {
    const username = localStorage.getItem('username');
    return username ? username : 'Guest'; // Return 'Guest' if username is not found
    console.log("username:",username);
  }

}
