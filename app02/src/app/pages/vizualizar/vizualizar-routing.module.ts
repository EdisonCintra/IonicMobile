import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VizualizarPage } from './vizualizar.page';

const routes: Routes = [
  {
    path: '',
    component: VizualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VizualizarPageRoutingModule {}
