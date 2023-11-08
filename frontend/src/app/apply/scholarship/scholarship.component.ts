import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.scss'],
})
export class ScholarshipComponent  implements OnInit {
  cards = [
    {
      image: "../assets/images/apply/graduate.svg",
      title: "Graduate Programme"
    },
    {
      image: "../assets/images/apply/leaders.svg",
      title: "Young Leaders"
    },
    {
      image: "../assets/images/apply/financial.svg",
      title: "Financial Aid"
    }
  ]


  scholarships = [
    {
      image: "../assets/images/scholarship/mic.svg",
      title: "Malaysia International Scholarship",
      desc: "Ministry of Higher Education"
    },
    {
      image: "../assets/images/scholarship/mtcp.svg",
      title: "Malaysian Technical Cooperation Programme",
      desc: "Ministry of Higher Education"
    },
    {
      image: "../assets/images/grant/catalyst.svg",
      title: "Malaysia Digital Catalyst Grant",
      desc: "MDEC | Digital"
    },
  ]

  scholarships1 = [
    {
      image: "../assets/images/scholarship/maxis.svg",
      title: "Maxis Women in Tech Scholarship",
      desc: "Maxis"
    },
    {
      image: "../assets/images/scholarship/ytl.svg",
      title: "YTL Foundation Scholarship Programme",
      desc: "YTL"
    },
    {
      image: "../assets/images/scholarship/hlbank.svg",
      title: "Hong Leong Foundation Scholarship",
      desc: "Hong Leong Bank"
    },
  ]
  
  constructor() { }

  ngOnInit() {}

}
