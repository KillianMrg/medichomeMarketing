import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFacebookComponent } from './home-facebook.component';

describe('HomeFacebookComponent', () => {
  let component: HomeFacebookComponent;
  let fixture: ComponentFixture<HomeFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFacebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
