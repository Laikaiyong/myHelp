import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitiativePage } from './initiative.page';

describe('InitiativePage', () => {
  let component: InitiativePage;
  let fixture: ComponentFixture<InitiativePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InitiativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
