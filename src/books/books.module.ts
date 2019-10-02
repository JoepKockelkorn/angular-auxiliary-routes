import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BookComponent } from './detail/detail.component';
import { AuthorTabComponent } from './detail/author-tab.component';
import { SummaryTabComponent } from './detail/summary-tab.component';
import { ModalComponent } from '../modal/modal/modal.component';

@NgModule({
  declarations: [OverviewComponent, BookComponent, AuthorTabComponent, SummaryTabComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: OverviewComponent },
      {
        path: ':bookId',
        component: BookComponent,
        children: [
          // This doesn't work, it can't match a route
          // { path: 'modal/:id', component: ModalComponent, outlet: 'modal' },
          { path: '', pathMatch: 'full', outlet: 'tab', redirectTo: 'author' },
          { path: 'author', outlet: 'tab', component: AuthorTabComponent },
          { path: 'summary', outlet: 'tab', component: SummaryTabComponent }
        ]
      }
    ])
  ],
  exports: [],
  providers: []
})
export class BooksModule {}
