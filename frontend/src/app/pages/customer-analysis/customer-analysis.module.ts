import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CustomersComponent } from './containers/customers/customers.component';
import { CustomersTableComponent } from './fragments/customers-table/customers-table.component';
import { MenuComponent } from './fragments/menu/menu.component';
import { CustomerAnalysisRoutingModule } from './customer-analysis-routing.module';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersTableComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CustomerAnalysisRoutingModule,
    NzGridModule,
    NzDescriptionsModule,
    NzBadgeModule,
    NzCollapseModule,
    NzDividerModule,
    NzDatePickerModule,
    NzTabsModule,
    NzIconModule,
    NzLayoutModule,
    NzListModule,
    ScrollingModule,
    NzStatisticModule,
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzInputModule,
    NzUploadModule,
    NzMessageModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinModule
  ]
})
export class CustomerAnalysisModule { }
