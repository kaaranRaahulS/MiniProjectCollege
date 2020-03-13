import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { Router } from '@angular/router';
import * as $ from "jquery";
// declare var newstransdata: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  newsdata: any;
  articlesArray: any;
  translatedNewsData: any;

  constructor(private newservice: NewserviceService, private router: Router) { }

  ngOnInit() {
    this.newservice.newfetchApi().subscribe((data) => {
      this.newsdata = data;
      this.articlesArray = (this.newsdata && this.newsdata.articles
        && this.newsdata.articles.length) ? this.newsdata.articles : [];
      // newstransdata = this.articlesArray;
      console.log(this.articlesArray['0'].title);
    })
  }
  content(data: any) {
    this.router.navigate(['view', data]);
  }
}
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
// 		"x-rapidapi-key": "d8fc58fcb1msh2df3d6b8b8e9592p1d1562jsn2cf6175548a5",
// 		"content-type": "application/x-www-form-urlencoded"
//   },
//   // "Hello, world!"
// 	"data": {
// 		"source": "en",
// 		"q": newstrans,
// 		"target": "ta"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });