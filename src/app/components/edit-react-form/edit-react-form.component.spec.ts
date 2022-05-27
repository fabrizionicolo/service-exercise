import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReactFormComponent } from './edit-react-form.component';

describe('EditReactFormComponent', () => {
  let component: EditReactFormComponent;
  let fixture: ComponentFixture<EditReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
