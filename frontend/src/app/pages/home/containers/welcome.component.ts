import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  followerCount = 0;
  impressions = 0;
  reach = 0;
  website = 0;
  email = 0;


  constructor() {}

  ngOnInit() {
    this.getAllInfos();
  }

  onClickOpenInsta() {
    
  }

  onClickOpenFacebook() {
    
  }

  onClickOpenLinkedin() {
    
  }

  /*transformDatas(datas: string) {
    var table: Array<any> = JSON.parse(datas);
    console.log(table);
    for (let i = 0; i < table.length; i++) {
      let data = {
        _id: table[i]['_id'],
        ig_id: table[i]['ig_id'],
        caption: table[i]['caption'],
        comments_count: table[i]['comments_count'],
        id: table[i]['id'],
        like_count: table[i]['like_count'],
        media_type: table[i]['media_type'],
        media_url: table[i]['media_url'],
        timestamp: table[i]['timestamp'],
        username: table[i]['username'],
      }
      this.listOfData.push(data);
    }
    this.spinner = false;
  }*/

  getAllInfos(): void {
    const datasSubject = new Subject<string>();
    datasSubject.subscribe(datas => {
      var table: Array<any> = JSON.parse(datas);
      this.followerCount = table[0].followersCount;
      this.impressions = table[0].impressions;
      this.reach = table[0].reach;
      this.website = table[0].websiteClicks;
      this.email = table[0].emailContacts;
      //this.transformDatas(datas);
    });

    var url = "http://80.77.225.39:8067/api/instagram/getstats";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        datasSubject.next(xhr.responseText);
      }
    };
    xhr.send();
  }

}
