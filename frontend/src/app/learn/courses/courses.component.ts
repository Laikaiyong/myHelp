import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent  implements OnInit {
  constructor() {}

  filters = [
    "Finance",
    "Growth",
    "Technology"
  ]

  courses = [
    {
      image: "../assets/images/courses/financial-planning.svg",
      title: "Financial Planning 101",
      desc: "Finance | 10 hours",
    },
    {
      image: "../assets/images/courses/not-broke.svg",
      title: "Not Going Broke",
      desc: "Finance | 10 hours",
      path: "/tabs/learn/course"
    },
    {
      image: "../assets/images/courses/machine-learning.svg",
      title: "Machine Learning",
      desc: "Technology | 21 hours"
    },
  ]

  courses1 = [
    {
      image: "../assets/images/courses/design-thinking.svg",
      title: "Design Thinking",
      desc: "Technology | 10 hours"
    },
    {
      image: "../assets/images/courses/web-development.svg",
      title: "Web Development",
      desc: "Technology | 100 hours"
    },
    {
      image: "../assets/images/courses/artificial-int.svg",
      title: "Artificial Intelligence",
      desc: "Technology | 21 hours"
    },
  ]


  ngOnInit() {
  }

}
