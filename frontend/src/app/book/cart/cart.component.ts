import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  // styleUrls: ['./library.component.scss'],
})
export class CartComponent  implements OnInit {

  books = [
    {
      image: "../../assets/images/books/manage-finance.svg",
      title: "How to Manage Finance",
      desc: "Finance"
    },
    {
      image: "../../assets/images/books/transition-technology.svg",
      title: "Transitioning to Technology",
      desc: "Technology"
    },
    {
      image: "../../assets/images/books/dummies.svg",
      title: "Programming for Dummies",
      desc: "Technology"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
