import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Comments } from '../../model/Comments';

const datas = [
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
  {
    "text": "N/A",
    "username": "N/A",
    "timestamp": "N/A",
    "like_count": "N/A",
  },
]

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {

  comments: Comments[] =[];

  //items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor() {
    this.comments = datas;
  }

  ngOnInit(): void {

  }

}
