import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  a: boolean = false;
  b: boolean = false;
  c: boolean = false;

  ngOnInit() {

  }

  one(): void {
    this.a = !this.a
  }

  two(): void {
    this.b = !this.b
  }

  three(): void {
    this.c = !this.c
  }
  

}
