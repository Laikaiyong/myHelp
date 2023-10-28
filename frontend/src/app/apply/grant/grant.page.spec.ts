import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrantPage } from './grant.page';

describe('GrantPage', () => {
  let component: GrantPage;
  let fixture: ComponentFixture<GrantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
