import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  // styleUrls: ['./library.component.scss'],
})
export class LibraryComponent  implements OnInit {

  filters = [
    "Finance",
    "Technology",
    "Design"
  ]

  books = [
    {
      image: "../../assets/images/books/manage-finance.svg",
      title: "How to Manage Your Finance",
      desc: "Finance"
    },
    {
      image: "../../assets/images/books/cash.svg",
      title: "Cash Cash Cash",
      desc: "Finance",
    },
    {
      image: "../../assets/images/books/finance-binance.svg",
      title: "Finance Binance",
      desc: "Finance"
    },
  ]
  
  books1 = [
    {
      image: "../../assets/images/books/transition-technology.svg",
      title: "Transitioning to Technology",
      desc: "Technology",
      path: "/tabs/book/bookdetail"
    },
    {
      image: "../../assets/images/books/dummies.svg",
      title: "Programming for Dummies",
      desc: "Technology"
    },
    {
      image: "../../assets/images/books/cannot-programming.svg",
      title: "I can't do Programming",
      desc: "Technology"
    },
  ]

  constructor() { }

  ngOnInit() {}

}
