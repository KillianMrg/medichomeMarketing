import { Component, OnInit  } from '@angular/core';
import { ChangeDetectionStrategy} from '@angular/core';
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
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostTableComponent implements OnInit {

  publishedPublications: PublishedPublications[] = [];

  //items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor() {
    this.publishedPublications = datas;
  }

  ngOnInit(): void {
    
  }

}
