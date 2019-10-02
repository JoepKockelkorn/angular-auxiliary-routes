import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalComponent } from '../modal/modal/modal.component';
import { StoreModule } from '@ngrx/store';
import { routerReducer, SerializedRouterStateSnapshot, RouterReducerState } from '@ngrx/router-store';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test/books' },
  {
    path: ':blaId',
    children: [
      { path: 'books', loadChildren: () => import('../books/books.module').then(m => m.BooksModule) },
      { path: 'cars', loadChildren: () => import('../cars/cars.module').then(m => m.CarsModule) }
    ]
  },
  { path: 'bookCreate', loadChildren: () => import('../modal/modal.module').then(m => m.ModalModule), outlet: 'modal' },
  { path: '**', component: NotFoundComponent }
];

const initialState: RouterReducerState<SerializedRouterStateSnapshot> = {
  state: {
    url: '',
    root: {
      children: [],
      paramMap: {} as any,
      params: {},
      component: '',
      data: {},
      firstChild: {} as any,
      fragment: '',
      outlet: '',
      url: [],
      queryParams: {},
      routeConfig: {} as any,
      parent: {} as any,
      pathFromRoot: '' as any,
      queryParamMap: {} as any,
      root: '' as any
    }
  },
  navigationId: -1
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }), StoreModule.forFeature('router', routerReducer, { initialState })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
