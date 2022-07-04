import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnloadPage } from './onload.page';

const routes: Routes = [
  {
    path: '',
    component: OnloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnloadPageRoutingModule {}
