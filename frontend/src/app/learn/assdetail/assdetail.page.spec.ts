import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssDetailPage } from './assdetail.page';

describe('AssDetailPage', () => {
  let component: AssDetailPage;
  let fixture: ComponentFixture<AssDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
