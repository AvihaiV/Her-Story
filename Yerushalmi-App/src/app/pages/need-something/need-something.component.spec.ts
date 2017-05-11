/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeedSomethingComponent } from './need-something.component';

describe('NeedSomethingComponent', () => {
  let component: NeedSomethingComponent;
  let fixture: ComponentFixture<NeedSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
