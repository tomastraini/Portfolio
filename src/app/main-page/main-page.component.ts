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
  imgsrc1 = "../../assets/Images/1.jpg"
  imgsrc2 = "../../assets/Images/2.jpg"
  imgsrc3 = "../../assets/Images/3.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
