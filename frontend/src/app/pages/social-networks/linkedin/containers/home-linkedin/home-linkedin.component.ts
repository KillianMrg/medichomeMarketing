import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-linkedin',
  templateUrl: './home-linkedin.component.html',
  styleUrls: ['./home-linkedin.component.css']
})
export class HomeLinkedinComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  /**
   * 
   **/
  ngOnInit(): void {}

}
