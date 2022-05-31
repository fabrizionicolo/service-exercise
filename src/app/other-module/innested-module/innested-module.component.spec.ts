import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnestedModuleComponent } from './innested-module.component';

describe('InnestedModuleComponent', () => {
  let component: InnestedModuleComponent;
  let fixture: ComponentFixture<InnestedModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnestedModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnestedModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
