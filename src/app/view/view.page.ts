import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  newsdata:any;
  constructor(private router : Router,private activatedRoute: ActivatedRoute) { 
    this.newsdata = this.activatedRoute.snapshot.paramMap.get('newscontent');
  }


  ngOnInit() {
    console.log(this.newsdata);
  }

}
