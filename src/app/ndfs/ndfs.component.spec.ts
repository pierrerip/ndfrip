import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NDFSComponent } from './ndfs.component';

describe('NDFSComponent', () => {
  let component: NDFSComponent;
  let fixture: ComponentFixture<NDFSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NDFSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NDFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
