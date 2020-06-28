import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImage: string = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  getValor() {

    return 1;
  }

  ngOnInit(): void {
  }

}
