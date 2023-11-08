import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent  implements OnInit {

  jobs = [
    {
      title: "Senior Technical Support Associate",
      company: "Asia Pacific University"
    },
    {
      title: "Senior Technician Specialist",
      company: "Bosch International"
    }
  ]

  constructor() { }

  ngOnInit() {}

}
