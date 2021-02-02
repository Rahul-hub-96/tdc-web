import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/_services/api-service.service';

@Component({
  selector: 'app-all-instructor',
  templateUrl: './all-instructor.component.html',
  styleUrls: ['./all-instructor.component.css']
})
export class AllInstructorComponent implements OnInit {


  instructorList : any[]=[];
  instructorSize:number = 16;
  isLoadMore:boolean= true;
  searchText ='';
  allData : any[]=[];

  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.allInstructur();
  }


  allInstructur(){
    this.service.allInstructur().subscribe((data : any) => {
          this.instructorList = data.dataList;
          this.allData = data.dataList;
    });
  }

 loadMore(){
   if(this.instructorList.length <= this.instructorSize ){
    this.instructorSize = this.instructorSize;
    this.isLoadMore= false;
   }else {
    this.isLoadMore = true;
    this.instructorSize = this.instructorSize + this.instructorSize ;
   }
  }

  openSearch(){
   
    var dots = document.getElementById("sliding-panel-inner_2");
    var outer = document.getElementById("sliding-panel-outer_2");
    
    if (outer.style.width === "275px") {
      outer.style.display='none'
      outer.style.width = "0px";
    } else {
      outer.style.display='block'
      outer.style.width = "275px";
    }
  }

  searchByName(){
    let whiteSpace = false
    whiteSpace =  (this.searchText || '').trim().length === 0
    
    if(this.instructorList == null || this.instructorList.length ==0){
     this.instructorList = this.allData
      this.instructorList = this.instructorList.filter(instructor => instructor.facultyName.includes(this.searchText));
      this.loadMore();
    }else if(this.searchText == undefined || this.searchText == '' || this.searchText == null || whiteSpace == true){
      this.instructorList = this.allData
      this.loadMore();
    }else{
      this.instructorList = this.instructorList.filter(instructor => instructor.facultyName.includes(this.searchText));
      this.loadMore();
    }
  }
}
