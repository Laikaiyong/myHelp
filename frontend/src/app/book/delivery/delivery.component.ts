import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  // styleUrls: ['./library.component.scss'],
})
export class DeliveryComponent  implements OnInit {

  deliveries = [
    {
      serial: "Delivery #0004",
      courier: "J&T Express",
      code: "ABC101010",
      status: "Out for Delivery",
      path: "/tabs/book/deliverydetail"
    },
    {
      serial: "Delivery #0003",
      courier: "J&T Express",
      code: "ABC101011",
      status: "Out for Delivery"
    },
  ]

  deliveries1 = [
    {
      serial: "Delivery #0002",
      courier: "J&T Express",
      code: "ABC101009",
      status: "Completed"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }
}
