import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScholarshipPage } from './scholarship.page';

describe('ScholarshipPage', () => {
  let component: ScholarshipPage;
  let fixture: ComponentFixture<ScholarshipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScholarshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
