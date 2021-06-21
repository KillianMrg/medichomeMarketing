import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ChangeDetectionStrategy } from '@angular/core';
import { PublishedPublications } from '../../model/PublishedPublications';
import { Subject } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

interface Data {
  "_id": string;
  "ig_id": string;
  "caption": string;
  "comments_count": string;
  "id": string;
  "like_count": string;
  "media_type": string;
  "media_url": string;
  "timestamp": string;
  "username": string;
  "reach": string;
  "impressions": string;
  "engagement": string;
  "saved": string;
  "authorLastUpdate": string;
  "author": string;
  "updateTimestamp": string;
  "createTimestamp": string;
}

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  spinner = true;
  listOfData: Data[]= [];
  idPost: string = "";
  permalink: string = "";
  code: string = ""

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.code = params['id0'];
      this.permalink = "https://www.instagram.com/p/"+params['id0']+"/?utm_source=ig_embed&amp;utm_campaign=loading";
      this.idPost = params['id1'];
    });
    console.log(this.permalink);
  }

  tabs = [
    {
      name: 'Statistics',
      icon: 'tag'
    },
    {
      name: 'Comments',
      icon: 'notification'
    }
  ];

  ngOnInit(): void {
    this.getAllDetails();
    $("<script async src=\"//www.instagram.com/embed.js\"></script>").insertAfter(".instagram-media-loaded");
    $("<script>instgrm.Embeds.process()</script>").insertAfter(".instagram-media-loaded");
  }

  transformDatas(datas: string) {
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
        reach: table[i]['reach'],
        impressions: table[i]['impressions'],
        engagement: table[i]['engagement'],
        saved: table[i]['saved'],
        authorLastUpdate: table[i]['authorLastUpdate'],
        author: table[i]['author'],
        updateTimestamp: table[i]['updateTimestamp'],
        createTimestamp: table[i]['createTimestamp'],
      }
      this.listOfData.push(data);
    }
    this.spinner = false;
  }

  getAllDetails(): void {
    const datasSubject = new Subject<string>();
    datasSubject.subscribe(datas => {
      this.transformDatas(datas);
    });

    var url = "http://80.77.225.39:8067/api/instagram/getpostbyid";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        datasSubject.next(xhr.responseText);
      }
    };
    var data = `{"_id": "${this.idPost}"}`;
    xhr.send(data);
  }
}
