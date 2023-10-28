import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainingbrowsePage } from './trainingbrowse.page';

describe('TrainingbrowsePage', () => {
  let component: TrainingbrowsePage;
  let fixture: ComponentFixture<TrainingbrowsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainingbrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
