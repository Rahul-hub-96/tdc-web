import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  isHide=false;
  ngOnInit(): void {
    if(this.router.url  == '/payment' || this.router.url  == '/profile_view'){
      this.isHide = true
    }
  }
}
