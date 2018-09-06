import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfiloPage } from './profilo';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';

@NgModule({
  declarations: [
    ProfiloPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfiloPage),
    TranslateModule.forChild()
  ],
})
export class ProfiloPageModule {}
