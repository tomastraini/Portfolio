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

  fadeInAbout = "fadeInCall";
  fadeInResume = "fadeInCall";

  isPhone = false

  clicked = 0;

  AboutHomeHeight = 800;
  ResumeHomeHeight = 2000;

  imagesLoaded = true;

  imgsrc1 = "https://drive.google.com/u/0/uc?id=1Z8E2HVm1qm7WCOm6EpO9gZIlR8Qq0fAi"
  imgsrc2 = "https://drive.google.com/u/0/uc?id=1TGdMQxA7Z-7IGjlWmRKoqqQyTogJgpyG"
  imgizo = "https://institutozonaoeste.edu.ar/wp-content/uploads/2023/03/cropped-cropped-logo-izo-izo-1-150x150-1.png"
  imgpwc   = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/2560px-PricewaterhouseCoopers_Logo.svg.png"
  imgingenea   = "https://www.ingenea.com.ar/Vistas/images/LogoIngenea.png"
  imggoethe  = "https://goetherosario.org/wp-content/uploads/2014/10/Logo-Goethe-+-Texto1.png"
  imggenexus  = "https://www.genexus.com/media/images/genexusbyglobant_large.svg?timestamp=20220921163437"
  imgtrinity  = "https://www.trinitycollege.com/images/trinity_college_london_logo.png"
  imgefset  = "https://www.efset.org/cert/6ea6771479ceeade5f025fb16ff71264.svg"

  countImages = 0;
  countImagesPoints = "";

  constructor() { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    this.handleAnimation();
  }

  ngOnInit(): void
  {
    this.handleAnimation();
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
    {
      this.isPhone = true;
      this.AboutHomeHeight = 1300;
    }
    else if(/Chrome/i.test(ua))
    {
      this.isPhone = false;
    }
    else
    {
      this.isPhone = false;
    }
    
  }

  loadImgs()
  {
    this.countImagesPoints += "."; 
    this.countImages++;
    console.log(this.countImages);
    
    
    if(this.countImages === 9)
    {
      this.imagesLoaded = false;
    }
  }

  handleAnimation()
  {
    var height = window.scrollY;
    height = height == undefined || height == null ? 0 : height;
    
    if(height > 0 && height < this.AboutHomeHeight)
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
    if(height > this.AboutHomeHeight && height < this.ResumeHomeHeight)
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
