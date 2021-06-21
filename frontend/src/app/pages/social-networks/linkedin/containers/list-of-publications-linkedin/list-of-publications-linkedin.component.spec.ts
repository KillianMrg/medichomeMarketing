import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPublicationsLinkedinComponent } from './list-of-publications-linkedin.component';

describe('ListOfPublicationsLinkedinComponent', () => {
  let component: ListOfPublicationsLinkedinComponent;
  let fixture: ComponentFixture<ListOfPublicationsLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPublicationsLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPublicationsLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
