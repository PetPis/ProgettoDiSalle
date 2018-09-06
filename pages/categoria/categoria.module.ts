import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaPage } from './categoria';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaPage),
    TranslateModule.forChild()
  ],
})
export class CategoriaPageModule {}
