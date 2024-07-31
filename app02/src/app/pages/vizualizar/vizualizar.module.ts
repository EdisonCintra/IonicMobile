import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VizualizarPageRoutingModule } from './vizualizar-routing.module';

import { VizualizarPage } from './vizualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VizualizarPageRoutingModule
  ],
  declarations: [VizualizarPage]
})
export class VizualizarPageModule {}
