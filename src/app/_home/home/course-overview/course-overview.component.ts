import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/_services/api-service.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class CourseOverviewComponent implements OnInit {

  tabType:string = ''
  isLessonsOpen:boolean = false;
  courseDetails : any;
  topics:any[]=[]
  lessonArrowIndex =0;
  contentDetails: any;
  isContentDetails:boolean = false;

  constructor(private apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.openPage('overview')
    this.getCourseDetailsByCourseId(39, 22)
  }

  @HostListener('window:scroll', ['$event'])
 
  onWindowScroll(e) {
     if (window.pageYOffset > 14) {
       let element = document.getElementById('navbar');
      document.getElementById('buyNow').style.display ='block';
       
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
        document.getElementById('buyNow').style.display ='none';
     }
  }


  openPage(type ){
    this.tabType = type ;
    if(type == 'overview'){
      
      document.getElementById("overview").style.display = 'block'
      document.getElementById("review").style.display = 'none'
      document.getElementById("lesson").style.display = 'none'
    }else if(type == 'lesson'){
    
      document.getElementById("lesson").style.display = 'block'
      document.getElementById("review").style.display = 'none'
      document.getElementById("overview").style.display = 'none'
    }else if(type =='review'){
      document.getElementById("review").style.display = 'block'
      document.getElementById("overview").style.display = 'none'
      document.getElementById("lesson").style.display = 'none'
    }else {
      document.getElementById("overview").style.display = 'block'
      document.getElementById("review").style.display = 'none'
      document.getElementById("lesson").style.display = 'none'
    }
  }


  openlistview(index){
    this.lessonArrowIndex = index;
    this.isLessonsOpen = !this.isLessonsOpen;
  }


  getCourseDetailsByCourseId(courseId, userId){
    this.apiService.getCourseDetailsByCourseId(courseId, userId).subscribe((data : any) => {
        this.courseDetails = data.response;
        this.topics = this.courseDetails.topics;
    });
  }

  getContentDetails(content : any){
    this.isContentDetails = true;
    this.contentDetails = content;
  }

  onRightClick($event){

  }
}
