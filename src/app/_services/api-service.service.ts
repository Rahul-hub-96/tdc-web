import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {


  private _baseUrl = environment.baseUrl;
  private _allfaculty = this._baseUrl +'faculty/faculty'
  private _getCourseDetails = this._baseUrl + 'courses/course';
  
  constructor(private http : HttpClient) { }

  
  allNews(){
    return this.http.get(this._baseUrl + "news/news");
  }

  allInstructur(){
    return this.http.get(this._allfaculty);
  }

  getCourseDetails(){
    return this.http.get(this._getCourseDetails);
  }

  getCourseDetailsByCourseId(courseId, userId){
    return this.http.get(this._getCourseDetails + '/' + courseId + '/contentDetails?userId=' + userId);
  }

  
  
}
