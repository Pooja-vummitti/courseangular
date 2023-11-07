import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent implements OnInit {
  
  ngOnInit(): void {
      
  }
  //property bindin - one way binding
  source : string ="assets/Web.jpg";
}
