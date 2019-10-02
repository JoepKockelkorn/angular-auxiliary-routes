import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: ModalComponent }, { path: ':bookId', pathMatch: 'full', component: ModalComponent }])],
  exports: [ModalComponent],
  providers: []
})
export class ModalModule {}
