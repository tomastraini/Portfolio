import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  env = "prod";

  ngOnInit(): void {
    this.changeIcon();
  }
  title = 'Portfolio';

  favIcon: HTMLLinkElement = document.querySelector('#appIcon')!;


  changeIcon() {
    this.favIcon.href = this.env == "dev" ?
    './assets/Images/favicon.ico' :
    '/Portfolio/assets/Images/favicon.jpg';
  }

}
