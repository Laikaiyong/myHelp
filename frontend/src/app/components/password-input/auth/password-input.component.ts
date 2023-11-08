import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent  implements OnInit {
  showPassword = false;

  @ContentChild(IonInput) input: IonInput;

  constructor() {}

  toggleShow() {
      this.showPassword = !this.showPassword;
      this.input.type = this.showPassword ? 'text' : 'password';
  }

  ngOnInit() {}

}
