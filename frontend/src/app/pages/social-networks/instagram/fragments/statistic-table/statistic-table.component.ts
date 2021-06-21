import { Component, OnInit } from '@angular/core';
import { Statistics } from '../../model/Statistics';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.css']
})
export class StatisticTableComponent implements OnInit {

  tabs = [
    {
      name: 'Account',
      icon: 'tag'
    },
    {
      name: 'Interactions',
      icon: 'notification'
    }, {
      name: 'Audiences',
      icon: 'profile'
    }

  ];

  datas: Statistics = new Statistics();

  constructor() { }

  ngOnInit(): void {
  }

}
