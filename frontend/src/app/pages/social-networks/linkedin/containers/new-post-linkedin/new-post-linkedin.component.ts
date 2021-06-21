import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ChangeDetectionStrategy } from '@angular/core';
import { PublishedPublications } from '../../model/PublishedPublications';

const datas = [
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  },
  {
    "id": "N/A;",
    "ig_id": "N/A",
    "titleMarketing": "N/A",
    "timestamp": "N/A",
    "caption": "N/A",
    "like_count": "N/A",
    "comments_count": "N/A",
    "impressions": "N/A",
    "media_type": "N/A",
    "media_url": "N/A"
  }
]


@Component({
  selector: 'app-new-post-Linkedin',
  templateUrl: './new-post-Linkedin.component.html',
  styleUrls: ['./new-post-Linkedin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostLinkedinComponent implements OnInit {

  publishedPublications: PublishedPublications[] = [];

  constructor() {
    this.publishedPublications = datas;
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
    $("<script async src=\"//www.Linkedin.com/embed.js\"></script>").insertAfter(".Linkedin-media-loaded");
    $("<script>instgrm.Embeds.process()</script>").insertAfter(".Linkedin-media-loaded");
  }
}
