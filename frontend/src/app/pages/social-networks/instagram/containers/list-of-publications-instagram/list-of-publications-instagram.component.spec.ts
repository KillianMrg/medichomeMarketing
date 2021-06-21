import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPublicationsInstagramComponent } from './list-of-publications-instagram.component';

describe('ListOfPublicationsInstagramComponent', () => {
  let component: ListOfPublicationsInstagramComponent;
  let fixture: ComponentFixture<ListOfPublicationsInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPublicationsInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPublicationsInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
