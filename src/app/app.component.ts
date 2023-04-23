import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }

  // env = "dev";
  env = "prod";


  apiurl = this.env == "dev" ?
  "/api/" :
  'https://portfolio-back-dx94.onrender.com/api/';

  ngOnInit(): void {
    this.changeIcon();

    this.http.get<any[]>(this.apiurl + 'wakeUpCall').subscribe(res =>{
    });

  }
  title = 'Portfolio';

  favIcon: HTMLLinkElement = document.querySelector('#appIcon')!;


  changeIcon() {
    this.favIcon.href = this.env == "dev" ?
    './assets/Images/favicon.ico' :
    '/Portfolio/assets/Images/favicon.ico';
  }

}
