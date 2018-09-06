import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovimentoPage } from './movimento';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';

@NgModule({
  declarations: [
    MovimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(MovimentoPage),
    TranslateModule.forChild()
  ],
})
export class MovimentoPageModule {}
