import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NDFPageComponent } from './ndf-page.component';

describe('NDFPageComponent', () => {
  let component: NDFPageComponent;
  let fixture: ComponentFixture<NDFPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NDFPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NDFPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
