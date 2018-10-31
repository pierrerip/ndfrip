import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NDFSSearchResultsComponent } from './ndfs-search-results.component';

describe('NDFSSearchResultsComponent', () => {
  let component: NDFSSearchResultsComponent;
  let fixture: ComponentFixture<NDFSSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NDFSSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NDFSSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
