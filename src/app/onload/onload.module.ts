import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnloadPageRoutingModule } from './onload-routing.module';

import { OnloadPage } from './onload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnloadPageRoutingModule
  ],
  declarations: [OnloadPage]
})
export class OnloadPageModule {}
