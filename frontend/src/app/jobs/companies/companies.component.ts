import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent  implements OnInit {
  filters = [
    "Technology",
    "Retail",
    "Manufacturing"
  ]

  slides = [
    "", "", ""
  ]

  companies = [
    {
      image: "../assets/images/jobs/duolingo.svg",
      title: "Duolingo",
      desc: "Education"
    },
    {
      image: "../assets/images/jobs/touchngo_comp.svg",
      title: "Touch n’ Go",
      desc: "Technology"
    },
    {
      image: "../assets/images/jobs/accenture.svg",
      title: "Accenture",
      desc: "Technology"
    },
  ]

  companies1 = [
    {
      image: "../assets/images/jobs/99mart.svg",
      title: "99 Speedmart",
      desc: "Retail",
      path: "/tabs/jobs/companydetail"
    },
    {
      image: "../assets/images/jobs/giant.svg",
      title: "Giant",
      desc: "Retail"
    },
    {
      image: "../assets/images/jobs/accenture.svg",
      title: "Accenture",
      desc: "Technology"
    },
  ]

  constructor() { }

  ngOnInit() {}

}
