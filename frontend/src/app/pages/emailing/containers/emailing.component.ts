import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface Client {
  id: number;
  name: string;
  gender: string;
  age: string;
  email: string;
  selected: boolean;
}

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

/*export interface Token {
  access_token: string;
  token_type: string;
}*/

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
  created_at: string,
  selected: boolean
}

@Component({
  selector: 'app-emailing',
  templateUrl: './emailing.component.html',
  styleUrls: ['./emailing.component.css']
})

export class EmailingComponent implements OnInit {
  @ViewChild('fieldEmail') fieldEmail: ElementRef;
  @ViewChild('fieldPhone') fieldPhone: ElementRef;
  @ViewChild('fieldCompany') fieldCompany: ElementRef;
  @ViewChild('fieldMessage') fieldMessage: ElementRef;
  @ViewChild('fieldName') fieldName: ElementRef;

  modalIsVisible = false;

  listOfClientFilter: Array<Client> = [];
  listOfClientFilterPageData: ReadonlyArray<Client> = [];
  setOfCheckedId = new Set<number>();
  checked = false;
  indeterminate = false;

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfClientFilterPageData.filter(({ selected }) => !selected).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfClientFilterPageData: ReadonlyArray<Client>): void {
    this.listOfClientFilterPageData = listOfClientFilterPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfClientFilterPageData.filter(({ selected }) => !selected);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  ngOnInit() {
    this.getAllCustomers();


    this.listOfClientFilter = new Array(10).fill(0).map((_, index) => {
      return {
        id: index,
        name: `Client ${index}`,
        gender: "male",
        age: "01-01-1990",
        email: `client${index}@gmail.com`,
        selected: false
      };
    });

    console.log(this.listOfClientFilter.length);
  }



  /* MODAL */

  showModal(): void {
    this.modalIsVisible = true;
  }

  handleOk(): void {
    this.modalIsVisible = false;
  }

  handleCancel(): void {
    this.modalIsVisible = false;
  }

/*
GET /api/mail/send
requied : name, company, phone, message, email (or [email])
*/

  sendNow(): void{
    const datasSubject = new Subject<string>();
    datasSubject.subscribe(datas => {
      //this.transformDatas(datas);
    });

    var url = "http://80.77.225.39:8067/api/mail/send";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      console.log(xhr.readyState + " - " + xhr.status + " - " + xhr.responseText);
      if (xhr.readyState === 4 && xhr.status === 200) {
        datasSubject.next(xhr.responseText);
        console.log("here");
      }
    };

    //var data = `{"name": "${this.name}"}`;
    var data = `{"name":"${this.fieldName.nativeElement.value}","company":"${this.fieldCompany.nativeElement.value}","phone":"${this.fieldPhone.nativeElement.value}","message":"${this.fieldMessage.nativeElement.value}","email":"${this.fieldEmail.nativeElement.value}"}`;
    xhr.send(data);
  }


  transformDatas(datas: string) {
    var table: Array<any> = JSON.parse(datas);
    this.listOfClientFilter = new Array(table.length).fill(0).map((_, index) => {
      return {
        id: index,
        name: table[index].first_name,
        gender: table[index].gender,
        age: table[index].date_of_birth,
        email: table[index].email,
        selected: false
      };
    });
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
