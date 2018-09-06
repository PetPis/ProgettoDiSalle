import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImpostazioniPage } from './impostazioni';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';

@NgModule({
  declarations: [
    ImpostazioniPage,
  ],
  imports: [
    IonicPageModule.forChild(ImpostazioniPage),
    TranslateModule.forChild()
  ],
})
export class ImpostazioniPageModule {}
