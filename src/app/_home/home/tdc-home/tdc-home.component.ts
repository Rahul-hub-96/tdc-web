import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiServiceService } from 'src/app/_services/api-service.service';

@Component({
  selector: 'app-tdc-home',
  templateUrl: './tdc-home.component.html',
  styleUrls: ['./tdc-home.component.css']
})
export class TdcHomeComponent implements OnInit {

  ischangeText = false;
  instructorList : any[]=[];
  instructorSize =8;
  sizeList = [] ;
  courseList:any[]=[]
  courseDetails : any;
  isCourse:boolean = false;
courseIndex:number =0;
  commentList :any[]=[];
  isLoadMore:boolean =  true;
  newsList : any;
  slides : any;

  @ViewChild('myCarousel') myCarousel: NgbCarousel;

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private service : ApiServiceService, config: NgbCarouselConfig) { 
    config.interval = 10000;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.animation =  true;
    config.pauseOnFocus= true;
    config.showNavigationArrows= false
    config.showNavigationIndicators= true
  
   
  }

  ngOnInit(): void {
    this.allInstructur();
    this.allNews();
   this.getCourseDetails();
   this.commentList.push('../../../../assets/img/stuent_img.png')
   this.commentList.push('../../../../assets/img/stuent_img.png')
   this.commentList.push('../../../../assets/img/stuent_img.png')
   this.commentList.push('../../../../assets/img/stuent_img.png')
   this.commentList.push('../../../../assets/img/stuent_img.png')
  }



allNews(){
  this.service.allNews().subscribe((data : any) => {
    if(data.status == 200){
      this.newsList = data.news;
    }
  })
}


changeText(){
  this.ischangeText = !this.ischangeText
}

allInstructur(){
  this.service.allInstructur().subscribe((data : any) => {
        this.instructorList = data.dataList;
  });
}

viewAllInst(){
  if(this.instructorList.length <= this.instructorSize ){
    this.instructorSize = this.instructorSize;
    this.isLoadMore= false;
   }else {
    this.isLoadMore = true;
    this.instructorSize = this.instructorSize* 2;
   }
}

getCourseDetails(){
  this.service.getCourseDetails().subscribe((data : any) => {
    if(data.status == 200){
      this.courseList =  data.dataList
      this.courseDetails = this.courseList[0];
    }
    
  })
}


courseMouseOver(index){
  this.courseIndex = index;
  this.isCourse = ! this.isCourse;
}

courseMouseOut(index){
  this.courseIndex = index;
  this.isCourse = false;
}

readmoreCourse(){
  var dot = document.getElementById("dot");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if ( dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

}

