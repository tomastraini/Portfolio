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


  apiurl = 'https://portfolio-back-dx94.onrender.com/api/';

  ngOnInit(): void {
    this.changeIcon();
    try {
      this.http.get(this.apiurl + 'wakeUpCall',{
        responseType: 'text'
      }).subscribe();
  
      this.http.post(this.apiurl + 'Visitors',{
      }).subscribe();
    } catch (e) {
      console.log(e)
    }

  }
  title = 'Portfolio';

  favIcon: HTMLLinkElement = document.querySelector('#appIcon')!;


  changeIcon() {
    this.favIcon.href = this.env == "dev" ?
    './assets/Images/favicon.ico' :
    '/Portfolio/assets/Images/favicon.ico';
  }

}
