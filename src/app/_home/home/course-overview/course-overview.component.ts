import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  lessonArrowIndex :number;
  contentDetails: any;
  isContentDetails:boolean = false;
  lastWatchTimeDuration = 0;
  contentUserTimeRes: any;
  lastWatchTime: any;
  userId:any;
  arkDoneRes: any;
  activityDateTime: any;
  studentId : string;
  isPaid:boolean = true;
  courseFee : number =0
  rebateFreeStudent : number =0
  rebatePaidStudent : number =0
  netPrice : number =0;
  userType: string=''
  othercourseList : any[]=[]

  constructor(private apiService : ApiServiceService,  private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  //   let id=localStorage.getItem("idss")
  //   let userType =  localStorage.getItem('userType');
  //   this.userType = userType;
  //   let userId =  localStorage.getItem('userId');
  //  this.userId= userId;
    this.openPage('overview')
    this.getCourseDetailsByCourseId(39, 22)
    this.otherCoursesByUserId(0)
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
        this.courseFee = (data.response.courseFee == null) ? 0 : data.response.courseFee
        this.rebateFreeStudent = (data.response.rabateFreeStudent == null) ? 0 : data.response.rabateFreeStudent;
        this.rebatePaidStudent = (data.response.rebatePaidStudent == null ) ? 0 : data.response.rebatePaidStudent
        
        this.netPrice = this.courseFee;
       
if(this.userType == "Paid"){
 if(this.rebatePaidStudent  < this.netPrice){
 this.netPrice = this.netPrice-this.rebatePaidStudent;
 }
}else if(this.userType == "Free"){
 if(this.rebateFreeStudent  < this.netPrice){
   this.netPrice = this.netPrice-this.rebateFreeStudent;
   }
  }
    
  });
}

  getContentDetails(content : any){
    this.isContentDetails = true;
    this.contentDetails = content;
  }

 
  isMarkDone(contentId) {
    const requestData = new FormData();
    requestData.append("contentId", contentId);
    requestData.append("isCompleted", "Y");
    requestData.append("studentId", this.studentId);
    this.apiService.markDone(requestData).subscribe(
      (data : any) => {
        this.activityDateTime = data.data.activityDateTime;
      },
      (error) => { }
    );
  }

  studentActivityRes: any;
  getStudentActivity(contentId) {
    this.apiService.getStudentActivity(this.userId, contentId).subscribe(
      (data : any) => {
        if (data.data != null) {
          this.activityDateTime = data.data.activityDateTime;
        } else {
          this.activityDateTime = null;
        }
      },
      (error) => { }
    );
  }


  saveContentUserTime(contentId) {
    const currentUserTime = {
      contentId: contentId,
      lastWatchTime: this.lastWatchTime,
      userId: this.userId,
    };
    this.apiService.saveContentUserTime(currentUserTime).subscribe((res) => {
      this.contentUserTimeRes = res;
    });
  }

  play(value) {
    value.target.currentTime = this.lastWatchTimeDuration;
  }

  onTimeUpdate(value) {
    this.lastWatchTimeDuration =  value.target.currentTime;
  }

  pauseVideo(value, contenId){
    this.lastWatchTimeDuration =  value.target.currentTime;
    this.saveContentUserTime(contenId);
  }

  transferPPT(contentValue) {
    const res = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/viewer?url=' + contentValue + '&embedded=true')
 return res;
  }

  totalTime(){
    
  }

  otherCoursesByUserId(userId){
    this.apiService.otherCoursesByUserId(0).subscribe((data : any)=>{
   
  if (data.status == 200){
   this.othercourseList = data.dataList;
   if(this.othercourseList==null || this.othercourseList==[]){
   }else{
   }
  }else{
}
}, error => {
});
  }

  onRightClick($event){

  }

}
