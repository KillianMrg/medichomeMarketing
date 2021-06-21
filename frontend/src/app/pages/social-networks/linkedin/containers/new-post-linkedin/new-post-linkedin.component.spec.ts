import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostLinkedinComponent } from './new-post-linkedin.component';

describe('NewPostLinkedinComponent', () => {
  let component: NewPostLinkedinComponent;
  let fixture: ComponentFixture<NewPostLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
