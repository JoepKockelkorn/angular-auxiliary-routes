import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { RoutingService } from '../../app/routing.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  // Should be fixed because we are using a custom routerFacade which exposes all params, even those of other outlet/activated components
  customId$ = this.route.paramMap.pipe(map(params => params.get('bookId')));

  constructor(private route: ActivatedRoute, private router: Router, private routingService: RoutingService) {}
  private destroyed$ = new Subject();

  ngOnInit() {
    this.routingService.params$.pipe(takeUntil(this.destroyed$)).subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  routeToSummary(id: string) {
    this.router.navigateByUrl(`/books/${id}/(tab:summary)`);
  }
}
