import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

  }

  toDashBoard() {
    this.router.navigate(['/socialNetworks/instagram/home']);
  }

  toNewPost() {
    this.router.navigate(['/socialNetworks/instagram/newPost']);
  }

  toListOfPublications() {
    this.router.navigate(['/socialNetworks/instagram/listOfPublications']);
  }

}
