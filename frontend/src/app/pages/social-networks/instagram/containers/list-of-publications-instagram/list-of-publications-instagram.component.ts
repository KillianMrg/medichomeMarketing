import { Component, NgModule, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface DataItem {
  id: string;
  ig_id: string;
  picture: string;
  title: string;
  status: string;
  creationDate: string;
  lastModifications: string;
  actions: string,
  permalink: string
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
}

@Component({
  selector: 'app-list-of-publications-instagram',
  templateUrl: './list-of-publications-instagram.component.html',
  styleUrls: ['./list-of-publications-instagram.component.css']
})
export class ListOfPublicationsInstagramComponent implements OnInit {

  listOfColumns: ColumnItem[] = [
    {
      name: 'Status',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.status.localeCompare(b.status),
      listOfFilter: [
        { text: 'Pending publications', value: 'PENDING_PUBLICATIONS' },
        { text: 'Scheduled sending', value: 'SCHEDULED_SENDING' },
        { text: 'Published publications', value: 'PUBLISHED_PUBLICATIONS' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.status.indexOf(name) !== -1)
    },
    {
      name: 'Creation date',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [],
      filterFn: (address: string, item: DataItem) => item.creationDate.indexOf(address) !== -1
    },
    {
      name: 'Last modifications',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: (address: string, item: DataItem) => item.lastModifications.indexOf(address) !== -1
    },   
  ];

  listOfData: DataItem[] = [

  ];

  listOfDisplayData = [...this.listOfData];
  searchValue: string = '';
  visible = false;
  spinner = true;
  permalink = "";
  idPost_Permalink: string = "undefined";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  transformDatas(datas: string) {
    var table: Array<any> = JSON.parse(datas);
    console.log(table);
    for (let i = 0; i < table.length; i++) {

      let data: DataItem = {
        id: table[i]['_id'],
        ig_id: table[i]['ig_id'],
        picture: table[i]['media_url'],
        title: table[i]['caption'],
        status: table[i]['status'],
        creationDate: table[i]['timestamp'],
        lastModifications: table[i]['timestamp'],
        actions: table[i]['media_url'],
        permalink: table[i]['permalink']
      }
      if (table[i]['permalink'] != null) {
        this.permalink = table[i]['permalink'].substring(28).slice(0, -1);
      }
      
      this.listOfDisplayData.push(data);
    }
    this.spinner = false;
  }

  getAllPosts(): void {
    const datasSubject = new Subject<string>();
    datasSubject.subscribe(datas => {
      this.transformDatas(datas);
    });

    var url = "http://80.77.225.39:8067/api/instagram/getallposts";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        datasSubject.next(xhr.responseText);
      }
    };
    xhr.send();
  }


  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  sortByAge(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Age') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach(item => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ];
      } else if (item.name === 'Address') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' }
        ];
      }
    });
  }

  resetSortAndFilters(): void {
    this.listOfColumns.forEach(item => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  showMePublication(idPost: string): void {
    this.router.navigate(['socialNetworks/instagram/publication/' + this.permalink + '/' + idPost]);
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.title.indexOf(this.searchValue) !== -1);
  }
}
