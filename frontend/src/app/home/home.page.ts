import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  companyPerformances = [
    {
      icon: "star-outline",
      title: "CURRENT RANKING",
      subtitle: "#2"
    },
    {
      icon: "cash-outline",
      title: "TOTAL SPONSORED (RM)",
      subtitle: "100,000"
    },
    {
      icon: "gift-outline",
      title: "TOTAL COMPANY SPONSORED",
      subtitle: "100"
    },
    {
      icon: "trending-down-outline",
      title: "TAX DEDUCTED (RM)",
      subtitle: "200,000"
    },
  ]

  sponsorships = [
    {
      image: "../../assets/images/sponsorship/google.svg",
      title: "Googel Cloud Certified",
      subtitle: "Google"
    },
    {
      image: "../../assets/images/sponsorship/bank_view.svg",
      title: "Banking Secret",
      subtitle: "Maybank"
    },
    {
      image: "../../assets/images/sponsorship/excelerate.svg",
      title: "Excelerate Asia",
      subtitle: "Excelerate | Free"
    },
  ]

  initiatives = [
    {
      title: "Run for Children 2023"
    },
    {
      title: "Save the Kittens"
    },
    {
      title: "I Love Planet Earth Initiative"
    },
  ]

  jobs = [
    {
      title: "Digital Analytics Intern"
    },
    {
      title: "Customer Analytics Associate"
    },
    {
      title: "Corporate Responsibility Intern"
    },
  ]

  ranks = [
    {
      title: "Celcom Digi",
      subtitle: "1,500,000 points",
      badge: 1,
      color: "secondary"
    },
    {
      title: "Maxis",
      subtitle: "1,000,000 points",
      badge: 2,
      color: "tertiary"
    },
    {
      title: "Roche",
      subtitle: "900,000 points",
      badge: 3,
      color: "danger"
    },
  ]

  // constructor(private firebaseService: FirebaseService) {
  //   // this.firebaseService.getFireStore("home-button").subscribe(res => {
  //   //   console.log(res);
  //   // });
  // }
  role =  localStorage.getItem("role");

  onChange(value: string) {
    localStorage.setItem("role", value);
    window.location.reload();

  }

  themeToggle = false;

  ngOnInit() {
    // // Use matchMedia to check the user preference
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // // Initialize the dark theme based on the initial
    // // value of the prefers-color-scheme media query
    // this.initializeDarkTheme(prefersDark.matches);

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark: boolean) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}

