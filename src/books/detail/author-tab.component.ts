import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-author-tab',
  template: `
    <ng-container *ngIf="id$ | async as id">
      <h3>Author</h3>

      <a [routerLink]="['/', { outlets: { modal: ['bookCreate', id] } }]">
        Modal
      </a>
    </ng-container>
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
export class AuthorTabComponent implements OnInit {
  id$ = this.route.parent.paramMap.pipe(map(params => params.get('bookId')));

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}
