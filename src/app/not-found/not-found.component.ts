import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingService } from 'src/app/routing.service';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="title">route not found!</div>
    <pre>{{ routing.navigationStart$ | async | json }}</pre>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 5px;
        border: solid red 1px;
      }
      .title {
        color: red;
        text-transform: uppercase;
      }
    `
  ]
})
export class NotFoundComponent {
  constructor(public routing: RoutingService) {}
}
