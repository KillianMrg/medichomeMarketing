import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { EmailingRoutingModule } from './emailing-routing.module';

import { EmailingComponent } from './containers/emailing.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [
    CommonModule,
    EmailingRoutingModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzModalModule,
    NzDatePickerModule],
  declarations: [EmailingComponent],
  exports: [EmailingComponent]
})
export class EmailingModule {}
