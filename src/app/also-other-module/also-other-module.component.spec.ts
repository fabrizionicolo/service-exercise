import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsoOtherModuleComponent } from './also-other-module.component';

describe('AlsoOtherModuleComponent', () => {
  let component: AlsoOtherModuleComponent;
  let fixture: ComponentFixture<AlsoOtherModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlsoOtherModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsoOtherModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
