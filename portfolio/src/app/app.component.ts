import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  showSlider: boolean = true;

  constructor(private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=>{
        const childRoute = this.activatedRoute.firstChild;
        if(childRoute && childRoute.snapshot.routeConfig){
          this.showSlider = childRoute.snapshot.routeConfig.path !=='**';
        }
      })
  }


}
