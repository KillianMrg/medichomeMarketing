import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstagramComponent } from './home-instagram.component';

describe('HomeInstagramComponent', () => {
  let component: HomeInstagramComponent;
  let fixture: ComponentFixture<HomeInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
