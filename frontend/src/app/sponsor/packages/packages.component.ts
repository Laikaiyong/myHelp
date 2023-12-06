import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
})
export class PackagesComponent implements OnInit {
  constructor() {}

  packages = [
    {
      prize: "RM15,000",
      title: "Empowerment Partner",
      desc1: "Recognition as a Gold Sponsor with a featured corporate profile on our platform",
      desc2: "Keynote speaking opportunity at our annual Empowerment Summit",
      desc3: "Customized impact assessment reports",
      desc4: "Eligibility for a dedicated scholarship program under your corporate name",
      path: "/tabs/sponsor/sponsoring"
    },
    {
      prize: "RM10,000",
      title: "Career Catalyst",
      desc1: "Recognition as a Silver Sponsor with your logo displayed prominently on our website and marketing materials",
      desc2: "Featured articles and interviews in our quarterly newsletter",
      desc3: "Customized impact assessment reports",
      desc4: "Priority access to recruitment opportunities",
      path: "/tabs/sponsor/sponsoring"
    },
    {
      prize: "RM5,000",
      title: "Skills Starter",
      desc1: "Recognition as a Bronze Sponsor on our platform and promotional materials",
      desc2: "Logo placement in newsletters and social media",
      desc3: "Exclusive virtual networking event with B40 beneficiaries and sponsors",
      desc4: "Quarterly progress reports and success stories",
      path: "/tabs/sponsor/sponsoring"
    },
  ]

  ngOnInit() {
  }

}
