import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SponsoringPage } from './sponsoring.page';

describe('SponsoringPage', () => {
  let component: SponsoringPage;
  let fixture: ComponentFixture<SponsoringPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SponsoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
