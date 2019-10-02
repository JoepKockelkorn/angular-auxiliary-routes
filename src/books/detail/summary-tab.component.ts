import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-tab',
  template: `
    <h3>Summary</h3>

    <a [routerLink]="['/cars']">Cars</a>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 5px;
        border: 1px solid #7fefbd;
      }
    `
  ]
})
export class SummaryTabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
