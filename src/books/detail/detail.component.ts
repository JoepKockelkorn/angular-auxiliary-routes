import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { State } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { selectAllRouteParams } from 'src/app/selectors';

@Component({
  selector: 'app-book',
  template: `
    <ng-container *ngIf="id$ | async as id">
      <div>Book {{ id }}</div>

      <a [routerLink]="['/bla/books', id, { outlets: { tab: 'author' } }]">
        Author
      </a>

      <a [routerLink]="['/bla/books', id, { outlets: { tab: 'summary' } }]">
        Summary
      </a>

      <pre>{{ params$ | async | json }}</pre>

      <router-outlet name="tab"></router-outlet>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        border: green solid 1px;
        padding: 5px;
      }
    `
  ]
})
export class BookComponent {
  id$ = this.route.paramMap.pipe(map(params => params.get('bookId')));
  // params$ = this.store.pipe(select(selectAllRouteParams));
  params$ = this.route.params;

  constructor(private route: ActivatedRoute, private store: Store<State>) {}
}
