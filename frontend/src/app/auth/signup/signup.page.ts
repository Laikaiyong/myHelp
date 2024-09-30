import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'; // Adjust the import path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {
  email = "";
  password = "";
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async signUp() {
    if (this.email && this.password) {
      try {
        const user = await this.authService.signUp(this.email, this.password);
        if (user) {
          console.log('User signed up successfully');
          this.router.navigate(['/tabs/home']); // Navigate to tabs page after successful signup
        } else {
          this.errorMessage = 'Failed to sign up. Please try again.';
        }
      } catch (error) {
        console.error('Error during sign up:', error);
        this.errorMessage = 'An error occurred during sign up. Please try again.';
      }
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }
  }
}