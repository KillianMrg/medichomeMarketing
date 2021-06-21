import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-home-instagram',
  templateUrl: './home-instagram.component.html',
  styleUrls: ['./home-instagram.component.css']
})
export class HomeInstagramComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  /**
   * 
   **/
  ngOnInit(): void { }

}
