import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent  implements OnInit {
  filters = [
    "Finance",
    "Growth",
    "Technology"
  ]


  assessment = [
    {
      image: "../assets/images/assessment/cash-flow.svg",
      title: "Cash Flow Analysis",
      desc: "Finance | 1 hours",
      path: "/tabs/learn/assessment/"
    },
    {
      image: "../assets/images/courses/machine-learning.svg",
      title: "Machine Learning",
      desc: "Technology | 1 hours"
    },
    {
      image: "../assets/images/assessment/ux-design.svg",
      title: "UX Design",
      desc: "Technology | 1.5 hours"
    },
  ]

  assessment1 = [
    {
      image: "../assets/images/assessment/python-pro.svg",
      title: "Python Programming",
      desc: "Technology | 1 hours"
    },
    {
      image: "../assets/images/assessment/m365.svg",
      title: "M365",
      desc: "Technology | 1 hours"
    },
    {
      image: "../assets/images/assessment/digital-mar.svg",
      title: "Digital Marketing",
      desc: "Technology | 2 hours"
    },
  ]

  constructor() { }

  ngOnInit() {}

}
