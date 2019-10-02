import { Component, OnInit } from '@angular/core';
import { Router, Route, Params } from '@angular/router';
import { RoutingService } from './routing.service';
import { Store, select } from '@ngrx/store';
import { State } from './reducers';
import { Observable } from 'rxjs';
import { selectAllRouteParams, selectAllRouteParamsRecursively } from './selectors';

interface CustomRoute extends Route {
  children: CustomRoute[];
  _loadedConfig: LoadedRouterConfig;
}

interface LoadedRouterConfig {
  module: any;
  routes: CustomRoute[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showTree = false;
  allParams$: Observable<Params>;
  allParamsRecursively$: Observable<Params>;

  constructor(private router: Router, private routingService: RoutingService, private store: Store<State>) {}

  ngOnInit(): void {
    this.routingService.init();
    this.allParams$ = this.store.pipe(select(selectAllRouteParams));
    this.allParamsRecursively$ = this.store.pipe(select(selectAllRouteParamsRecursively));
    this.allParamsRecursively$.subscribe(val => console.log(val));
  }

  get tree() {
    return this.router.config.map((route: CustomRoute) => this.mapRoute(route));
  }

  private mapRoute(route: CustomRoute): any {
    return {
      path: route.path,
      pathMatch: route.pathMatch,
      component: route.component ? route.component.name : undefined,
      outlet: route.outlet,
      redirectTo: route.redirectTo,
      children: route.children ? route.children.map(r => this.mapRoute(r)) : route._loadedConfig ? route._loadedConfig.routes.map(r => this.mapRoute(r)) : undefined
    };
  }
}
