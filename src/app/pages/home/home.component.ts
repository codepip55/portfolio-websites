import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show-c')
        } else {
          entry.target.classList.remove('show-c')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden-c');
    hiddenElements.forEach((el) => observer.observe(el))
  }

}
