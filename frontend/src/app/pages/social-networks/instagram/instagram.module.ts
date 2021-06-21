import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InstagramRoutingModule } from './instagram-routing.module';

import { NzSpinModule } from 'ng-zorro-antd/spin';
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

import { MenuComponent } from './fragments/menu/menu.component';
import { HomeInstagramComponent } from './containers/home-instagram/home-instagram.component';
import { NewPostInstagramComponent } from './containers/new-post-instagram/new-post-instagram.component';
import { ListOfPublicationsInstagramComponent } from './containers/list-of-publications-instagram/list-of-publications-instagram.component';
import { CommentsComponent } from './fragments/comments/comments.component';
import { StatisticTableComponent } from './fragments/statistic-table/statistic-table.component';
import { PostTableComponent } from './fragments/post-table/post-table.component';
import { PublicationComponent } from './containers/publication/publication.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeInstagramComponent,
    StatisticTableComponent,
    NewPostInstagramComponent,
    MenuComponent,
    PostTableComponent,
    CommentsComponent,
    ListOfPublicationsInstagramComponent,
    PublicationComponent,
  ],
  imports: [
    CommonModule,
    InstagramRoutingModule,
    HttpClientModule,
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
export class InstagramModule { }
