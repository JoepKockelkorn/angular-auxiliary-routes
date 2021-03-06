import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: OverviewComponent }])]
})
export class CarsModule {}
