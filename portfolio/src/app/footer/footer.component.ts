import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  currentYear:number;
  // Password: string = '';

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    // this.currentYear = new Date().getFullYear();
  }

}
