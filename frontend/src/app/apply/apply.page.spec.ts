import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplyPage } from './apply.page';

describe('ApplyPage', () => {
  let component: ApplyPage;
  let fixture: ComponentFixture<ApplyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
