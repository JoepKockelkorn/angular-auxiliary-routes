import { Injectable } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

interface CustomRouteSnapshot extends ActivatedRouteSnapshot {
  children: CustomRouteSnapshot[] | undefined;
}

@Injectable({ providedIn: 'root' })
export class RoutingService {
  navigationStart$ = new ReplaySubject(1);
  params$ = new ReplaySubject(1);

  constructor(private router: Router, private route: ActivatedRoute) {}

  init() {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(start => {
      this.navigationStart$.next(start);
    });
  }
}
