import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent  implements OnInit {
  filters = [
    "Technician",
    "Intern",
    "Driver"
  ]

  jobs = [
    {
      image: "../assets/images/jobs/duolingo.svg",
      title: "Technician",
      desc: "Duolingo"
    },
    {
      image: "../assets/images/jobs/touchngo.svg",
      title: "Technician",
      desc: "Touch n’ Go"
    },
    {
      image: "../assets/images/jobs/accenture.svg",
      title: "Technician",
      desc: "Accenture"
    },
  ]

  buttons = [
    {
      name: "rocket-outline",
      text: "Fresh Graduate",
    },
    {
      name: "desktop-outline",
      text: "Technician",
    },
    {
      name: "time-outline",
      text: "Part-time",
    },
    {
      name: "cafe-outline",
      text: "Waiter / Waitress",
    },
  ]

  constructor() { }

  ngOnInit() {}

}
