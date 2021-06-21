import { Component, NgModule, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  picture: string;
  title: string;
  status: string;
  creationDate: string;
  lastModifications: string;
  actions: string
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
}

@Component({
  selector: 'app-list-of-publications-linkedin',
  templateUrl: './list-of-publications-linkedin.component.html',
  styleUrls: ['./list-of-publications-linkedin.component.css']
})
export class ListOfPublicationsLinkedinComponent implements OnInit {

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
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
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
    {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "SCHEDULED_SENDING",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    }, {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "SCHEDULED_SENDING",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    }, {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "SCHEDULED_SENDING",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    },
    {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "PENDING_PUBLICATIONS",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    },
    {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "PENDING_PUBLICATIONS",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    }, {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "zzzzzzzzzz",
      status: "PUBLISHED_PUBLICATIONS",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    }, {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "PUBLISHED_PUBLICATIONS",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    },
    {
      picture: "https://scontent-cdt1-1.cdnLinkedin.com/v/t51.29350-15/184537925_2916112591933630_6913174795407904144_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3OIFE2-RIiwAX9QffqY&_nc_ht=scontent-cdt1-1.cdnLinkedin.com&oh=9378e5850f56ff5c62e42d2806138a20&oe=60C6FFC2",
      title: "Campagne de publicité pour promouvoir la création de la page",
      status: "PUBLISHED_PUBLICATIONS",
      creationDate: "2021-05-12T15:17:16+0000",
      lastModifications: "2021-05-12T15:17:16+0000",
      actions: "test",
    },
  ];

  listOfDisplayData = [...this.listOfData];

  searchValue: string = '';
  visible = false;

  constructor() {}

  ngOnInit(): void {}

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
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.title.indexOf(this.searchValue) !== -1);
  }
}
