import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostInstagramComponent } from './new-post-instagram.component';

describe('NewPostInstagramComponent', () => {
  let component: NewPostInstagramComponent;
  let fixture: ComponentFixture<NewPostInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostInstagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
