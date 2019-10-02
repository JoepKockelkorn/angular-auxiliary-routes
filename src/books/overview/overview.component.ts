import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div>Books overview</div>

    <pre>{{ params$ | async | json }}</pre>

    <ul>
      <li *ngFor="let id of ids">
        <a [routerLink]="[id]">{{ id }}</a>
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid red;
        padding: 5px;
      }

      ul {
        padding: 0;
        list-style: none;
      }

      li {
        display: inline-block;
      }
      li + li {
        margin-left: 10px;
      }
    `
  ]
})
export class OverviewComponent implements OnInit, OnDestroy {
  ids = [...Array(10).keys()].map((v, i) => i + 1);
  params$ = this.route.params;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(val => console.log(val));
  }

  ngOnDestroy(): void {
    console.log('destroyed!');
  }
}
