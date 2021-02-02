import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/_services/api-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList:any[]=[];
  news :any
  newss ='Google News is a news aggregator service developed by Google. It presents a continuous flow of articles organized from thousands of publishers and magazines. Google News is available as an app on Android, iOS, and the Web. Google released a beta version in September 2002 and the official app in January 2006'
  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    
    this.newsList.push({newsId: 1, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 2, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 3, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 4, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 5, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 6, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 7, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 8, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 9, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 10, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 11, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})

    this.newsList.push({newsId: 1, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 1, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})

    this.newsList.push({newsId: 1, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})
    this.newsList.push({newsId: 1, newsText : this.newss, image : "../../../../assets/img/news04.jpg", title: "new head"})

    this.news = this.newsList[0];
    //this.allNews();
  }

  allNews(){
    this.service.allNews().subscribe((data : any) => {
      if(data.status == 200){
        this.newsList = data.news;
      }
    })
  }


  myFunction(id) {
    var dots = document.getElementById("dots"+id);
    var moreText = document.getElementById("more"+id);
    var btnText = document.getElementById("myBtn"+id);
    if (dots.style.display === "none" ) {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "  Read less"; 
      moreText.style.display = "inline";
      
    }
  
  }

}

