import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneratePage } from './gen.page';

describe('GeneratePage', () => {
  let component: GeneratePage;
  let fixture: ComponentFixture<GeneratePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
