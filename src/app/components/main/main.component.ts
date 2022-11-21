import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  isOpen = false;
  title!: string;
  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
        if(routerEvent instanceof ActivationEnd) {
          let titleTmp = routerEvent.snapshot.data['title'];
          if(titleTmp) {
            this.title= titleTmp;
          }
        }
    });
}
  
  ngOnInit(): void {

  }

  itemClicked($event: any) {
    this.isOpen = !this.isOpen;
    console.log($event)
  }

  
}
