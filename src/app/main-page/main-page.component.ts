import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  HomeTextColor = "text-white";
  AboutTextColor = "text-white";
  ResumeTextColor = "text-white";
  PortfolioTextColor = "text-white";

  HomeIcoColor = "text-white";
  AboutIcoColor = "text-white";
  ResumeIcoColor = "text-white";
  PortfolioIcoColor = "text-white";

  fadeInAbout = "";
  fadeInResume = "";

  isPhone = false

  clicked = 0;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    var height = window.scrollY;
    if(height > 0 && height < 1200)
    {
      this.HomeTextColor = "text-white";
      this.AboutTextColor = "text-white";
      this.ResumeTextColor = "text-secondary";
      this.PortfolioTextColor = "text-secondary";
    
      this.HomeIcoColor = "IcoColor";
      this.AboutIcoColor = "IcoColor";
      this.ResumeIcoColor = "text-white";
      this.PortfolioIcoColor = "text-white";

      this.fadeInAbout = "fadeInCall"
      this.fadeInResume = "fadeOutCall"

    }
    if(height > 800 && height < 2000)
    {
      this.HomeTextColor = "text-secondary";
      this.AboutTextColor = "text-secondary";
      this.ResumeTextColor = "text-white";
      this.PortfolioTextColor = "text-secondary";
    
      this.HomeIcoColor = "text-white";
      this.AboutIcoColor = "text-white";
      this.ResumeIcoColor = "IcoColor";
      this.PortfolioIcoColor = "text-white";

      this.fadeInAbout = "fadeOutCall"
      this.fadeInResume = "fadeInCall"
    }
  }
  imgsrc1 = "https://drive.google.com/u/0/uc?id=1Z8E2HVm1qm7WCOm6EpO9gZIlR8Qq0fAi"
  imgsrc2 = "https://drive.google.com/u/0/uc?id=1TGdMQxA7Z-7IGjlWmRKoqqQyTogJgpyG"

  constructor() { }

  ngOnInit(): void
  {
    var height = window.pageYOffset;
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
    {
      this.isPhone = true;
    }
    else if(/Chrome/i.test(ua))
    {
      this.isPhone = false;
    }
    else
    {
      this.isPhone = false;
    }
    
    if(height >= 0 && height < 1200)
    {
      this.HomeTextColor = "text-white";
      this.AboutTextColor = "text-white";
      this.ResumeTextColor = "text-secondary";
      this.PortfolioTextColor = "text-secondary";
    
      this.HomeIcoColor = "IcoColor";
      this.AboutIcoColor = "IcoColor";
      this.ResumeIcoColor = "text-white";
      this.PortfolioIcoColor = "text-white";
     
      this.fadeInAbout = "fadeInCall"
      this.fadeInResume = "fadeOutCall"

    }
    if(height > 800 && height < 2000)
    {
      this.HomeTextColor = "text-secondary";
      this.AboutTextColor = "text-secondary";
      this.ResumeTextColor = "text-white";
      this.PortfolioTextColor = "text-secondary";
    
      this.HomeIcoColor = "text-white";
      this.AboutIcoColor = "text-white";
      this.ResumeIcoColor = "IcoColor";
      this.PortfolioIcoColor = "text-white";

      this.fadeInAbout = "fadeOutCall"
      this.fadeInResume = "fadeInCall"
    }
  }

  GoTo(link: any): void
  {
    window.open(link);
  }

  DoScroll(to: any): void
  {
    if(to.includes("HomeAndAbout"))
    {
      document.getElementById("AboutMe")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
    if(to.includes("Resume"))
    {
      document.getElementById("resume")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }

  }

  async collapseNavbar(): Promise<void>
  {
    console.log("done!");
    this.clicked++; 
    var coll = document.getElementById("navbarSupportedContent");
    if (!coll) return;

    if(!this.isOdd(this.clicked))
    {
      await this.delay(370);
      console.log("done");
      
      coll.className = "collapse navbar-collapse"
    }
  }

  delay(time: any) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  isOdd(num: number) { return num % 2;}

}
