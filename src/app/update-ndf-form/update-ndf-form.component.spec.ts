import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNdfFormComponent } from './update-ndf-form.component';

describe('UpdateNdfFormComponent', () => {
  let component: UpdateNdfFormComponent;
  let fixture: ComponentFixture<UpdateNdfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNdfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
