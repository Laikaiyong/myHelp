import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss'],
})
export class InitiativesComponent  implements OnInit {
  constructor() {}

  filters = [
    "Charities",
    "Courses",
    "Shelter"
  ]

  initiatives = [
    {
      image: "../assets/images/sponsor/digital-device.svg",
      title: "Children Digital Devices",
      desc: "Projek Digital",
    },
    {
      image: "../assets/images/sponsor/rural-area.svg",
      title: "Rural Area Education",
      desc: "Charisma Movement",
      path: "/tabs/sponsor/initiative"
    },
    {
      image: "../assets/images/sponsor/funding-children.svg",
      title: "Funding for Students",
      desc: "Kebajikan Pelajar"
    },
  ]

  initiatives1 = [
    {
      image: "../assets/images/sponsor/funding-pet.svg",
      title: "Pet Shelter Funding",
      desc: "Animal Lovers Club"
    },
    {
      image: "../assets/images/sponsor/stray-cat.svg",
      title: "Stray Cat Funding",
      desc: "Furry Kids Shelter"
    },
    {
      image: "../assets/images/sponsor/disabled.svg",
      title: "Disable Charity",
      desc: "Care Society"
    },
  ]


  ngOnInit() {
  }

}
