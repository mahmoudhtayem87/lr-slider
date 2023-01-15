import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {NgImageSliderComponent} from "ng-image-slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit  {

  @ViewChild('nav') slider!: NgImageSliderComponent;
  public imageObject = [];
  infinite: any = true;
  imagePopup: any = true;
  animationSpeed: any = "0.5";
  slideImage: any="2";
  imageSize: any = {width: '30%', height: '600px', space: 10};
  manageImageRatio: any="false";
  showArrow: any="true";
  direction: any="auto";
  imageSizeWidth = "400px";
  imageSizeHeight = "400px";
  imageSizeSpace = 4;
  private autoSlideInterval =  2;
  private autoSlideStopOnHover = true;
  autoSlide: any = {
    interval : 2,
    stopOnHover:true
  };

  getData()
  {
    const dataElements = this.elementRef.nativeElement.querySelectorAll("data-element");
    for (let index = 0 ; index < dataElements.length ; index++)
    {
      var type = dataElements[index].getAttribute("type")?dataElements[index].getAttribute("type") : "image";
      if(type.toLowerCase() === "image")
      {
        var imageElement = {
          image: dataElements[index].getAttribute("image")?dataElements[index].getAttribute("image") : "",
          thumbImage: dataElements[index].getAttribute("thumbImage")?dataElements[index].getAttribute("thumbImage") : "",
          alt: dataElements[index].getAttribute("alt")?dataElements[index].getAttribute("alt") : ""
        };
        // @ts-ignore
        this.imageObject.push(imageElement);
      }else
      {
        var videoElement = {
          video:dataElements[index].getAttribute("video")?dataElements[index].getAttribute("video") : ""
        };
        // @ts-ignore
        this.imageObject.push(videoElement);
      }
    }
  }

  getDataByHTMLTag()
  {
    const htmlImgs = this.elementRef.nativeElement.querySelectorAll("img") as Array<any>;
    console.log(htmlImgs)
    const htmlVideo = this.elementRef.nativeElement.querySelectorAll("img");
    for (let index = 0 ; index < htmlImgs.length ; index++)
    {
      let dataElement = htmlImgs[index];
      var imageElement = {
        image: dataElement.getAttribute("src")?dataElement.getAttribute("src") : "",
        thumbImage: dataElement.getAttribute("src")?dataElement.getAttribute("src") : "",
        alt: dataElement.getAttribute("alt")?dataElement.getAttribute("alt") : ""
      };
      // @ts-ignore
      this.imageObject.push(imageElement);
      dataElement.setAttribute("style","display:none!important");
    }
  }

  getConfiguration()
  {
    const config = this.elementRef.nativeElement.querySelector("config");
    if (!config)
      return;
    this.infinite = config.getAttribute("infinite")?config.getAttribute("infinite").toLowerCase() === "true" : this.infinite;
    this.imagePopup = config.getAttribute("imagePopup")?config.getAttribute("imagePopup").toLowerCase() === "true" : this.imagePopup;
    this.animationSpeed = config.getAttribute("animationSpeed")?config.getAttribute("animationSpeed") : this.animationSpeed;
    this.slideImage = config.getAttribute("slideImage")?config.getAttribute("slideImage") : this.animationSpeed;
    this.manageImageRatio = config.getAttribute("manageImageRatio")?config.getAttribute("manageImageRatio").toLowerCase() === "true" : this.manageImageRatio;
    this.showArrow = config.getAttribute("showArrow")?config.getAttribute("showArrow").toLowerCase() === "true" : this.showArrow;
    this.direction = config.getAttribute("direction")?config.getAttribute("direction").toLowerCase() === "true" : this.direction;

    this.imageSizeWidth = config.getAttribute("imageSizeWidth")?config.getAttribute("imageSizeWidth") : this.imageSizeWidth;
    this.imageSizeHeight = config.getAttribute("imageSizeHeight")?config.getAttribute("imageSizeHeight") : this.imageSizeHeight;
    this.imageSizeSpace = config.getAttribute("imageSizeSpace")?parseInt( config.getAttribute("imageSizeSpace") ): this.imageSizeSpace;
    this.imageSize = {
      width:this.imageSizeWidth,
      height:this.imageSizeHeight,
      space:this.imageSizeSpace
    }

    this.autoSlideInterval = config.getAttribute("autoSlideInterval")? parseInt( config.getAttribute("autoSlideInterval") ): this.autoSlideInterval;
    this.autoSlideStopOnHover = config.getAttribute("autoSlideStopOnHover")?config.getAttribute("autoSlideStopOnHover").toLowerCase() === "true" : this.autoSlideStopOnHover;
    this.autoSlide = {
      interval : this.autoSlideInterval,
      stopOnHover : this.autoSlideStopOnHover
    }

  }

  constructor(public elementRef: ElementRef) {
    this.getConfiguration();
    this.getDataByHTMLTag();

  }

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")

  }

  ngOnInit(): void {
  }

}
