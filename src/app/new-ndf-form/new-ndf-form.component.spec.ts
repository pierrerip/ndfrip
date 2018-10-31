import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNDFFormComponent } from './new-ndf-form.component';

describe('NewNDFformComponent', () => {
  let component: NewNDFFormComponent;
  let fixture: ComponentFixture<NewNDFFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNDFFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNDFFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
