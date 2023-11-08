import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.scss'],
})
export class GrantComponent  implements OnInit {
  cards = [
    {
      image: "../assets/images/apply/digital.svg",
      title: "Digital"
    },
    {
      image: "../assets/images/apply/investment.svg",
      title: "Investment"
    },
    {
      image: "../assets/images/apply/human-resource.svg",
      title: "Human Resource"
    }
  ]


  grants = [
    {
      image: "../assets/images/grant/digital-content.svg",
      title: "Digital Content Grant",
      desc: "MDEC | Digital"
    },
    {
      image: "../assets/images/grant/x-post.svg",
      title: "Malaysia Digital X-Port Grant",
      desc: "MDEC | Digital"
    },
    {
      image: "../assets/images/grant/catalyst.svg",
      title: "Malaysia Digital Catalyst Grant",
      desc: "MDEC | Digital"
    },
  ]

  grants1 = [
    {
      image: "../assets/images/grant/domestic.svg",
      title: "Domestic Investment Strategic Fund",
      desc: "MIDA | Investment"
    },
    {
      image: "../assets/images/grant/industry4wrd1.svg",
      title: "Industry4WRD Intervention Fund",
      desc: "MIDA | Investment"
    },
    {
      image: "../assets/images/grant/industry4wrd2.svg",
      title: "Industry4WRD DISF",
      desc: "MIDA | Investment"
    },
  ]

  constructor() { }

  ngOnInit() {}

}
