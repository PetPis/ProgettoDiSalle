import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovimentiPage } from './movimenti';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MovimentiPage,
  ],
  imports: [
    IonicPageModule.forChild(MovimentiPage),
    TranslateModule.forChild()
  ],
})
export class MovimentiPageModule {}
