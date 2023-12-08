import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.page.html',
  styleUrls: ['./scholarship-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ScholarshipDetailsComponent  implements OnInit {
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
