import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
     console.log("scrolling");
  }
  imgsrc1 = "https://drive.google.com/u/0/uc?id=1Z8E2HVm1qm7WCOm6EpO9gZIlR8Qq0fAi"
  imgsrc2 = "https://drive.google.com/u/0/uc?id=1TGdMQxA7Z-7IGjlWmRKoqqQyTogJgpyG"

  constructor() { }

  ngOnInit(): void {
  }

}
