import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsored',
  templateUrl: './sponsored.component.html',
  styleUrls: ['./sponsored.component.scss'],
})
export class SponsoredComponent  implements OnInit {

  scholarships = [
    "Run for Children 2023",
    "Save the Kittens",
    "I love Planet Earth Initiative"
  ]

  constructor() { }

  ngOnInit() {}

}