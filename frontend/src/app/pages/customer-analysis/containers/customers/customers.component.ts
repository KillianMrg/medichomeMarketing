import { Component, OnInit, } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Token {
  access_token: string;
  token_type: string;
}

export interface Customer {
  id:  number,
  first_name: string,
  last_name: string,
  date_of_birth: string,
  gender: string,
  phone: string,
  email: string,
  country: string,
  city: string,
  postal_code: string,
  street: string,
  level: string,
  salesperson: number,
  salesperson_comment: string,
  modified_at: string,
  created_at: string
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  listOfColumns: ColumnItem[] = [
    {
      name: 'Date of birth',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [
        { text: 'Pending publications', value: 'PENDING_PUBLICATIONS' },
        { text: 'Scheduled sending', value: 'SCHEDULED_SENDING' },
        { text: 'Published publications', value: 'PUBLISHED_PUBLICATIONS' }
      ],
      filterFn: (list: string[], item: Customer) => list.some(first_name => item.first_name.indexOf(first_name) !== -1)
    },
    {
      name: 'Gender',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'Woman', value: 'Woman' },
        { text: 'Man', value: 'Man' }
      ],
      filterFn: (address: string, item: Customer) => item.gender.indexOf(address) !== -1
    },
  ];

  customersTable: Customer[] = [];
  listOfDisplayData = [...this.customersTable];
  datas: string = "";
  spinner = true;
  searchValue: string = '';
  visible = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllCustomers();
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

  search(): void {
    this.visible = true;
    this.listOfDisplayData = this.customersTable.filter((item: Customer) => item.first_name.indexOf(this.searchValue) !== -1);
  }

  transformDatas(datas: string) {
    var table: Array<any> = JSON.parse(datas);
    for (let i = 0; i < table.length; i++) {
      this.customersTable.push(table[i]);
    }
    this.spinner = false;
  }

  getAllCustomers(): void {
    const datasSubject = new Subject <string>();
    datasSubject.subscribe(datas => {
      this.transformDatas(datas);
    });
    var url = "https://ta70-sales-backend.herokuapp.com/security/token";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var url2 = "https://ta70-sales-backend.herokuapp.com/persons/?skip=0";
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", url2); 
        xhr2.setRequestHeader("accept", "application/json");
        xhr2.setRequestHeader("Authorization", JSON.parse(xhr.responseText)['token_type'] + " " + JSON.parse(xhr.responseText)['access_token']);
        xhr2.onreadystatechange =  () => {
          if (xhr2.readyState === 4 && xhr2.status === 200) {
            datasSubject.next(xhr2.responseText);
          }
        };
        xhr2.send();
      }
    };
    var data = "grant_type=&username=marketing&password=marketing!&scope=seller%20manager&client_id=&client_secret=";
    xhr.send(data);
  }
}
