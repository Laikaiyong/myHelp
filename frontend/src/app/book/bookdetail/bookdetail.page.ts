import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.page.html',
  styleUrls: ['./bookdetail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class BookDetailPage  implements OnInit {

  books = [
    {
      image: "../assets/images/books/manage-finance.svg",
      title: "How to Manage Finance",
      desc: "Finance"
    },
    {
      image: "../assets/images/books/transition-technology.svg",
      title: "Transitioning to Technology",
      desc: "Technology"
    },
    {
      image: "../assets/images/books/dummies.svg",
      title: "Programming for Dummies",
      desc: "Technology"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
