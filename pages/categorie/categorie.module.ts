import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriePage } from './categorie';
import { TranslateModule } from '../../../node_modules/@ngx-translate/core';

@NgModule({
  declarations: [
    CategoriePage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriePage),
    TranslateModule.forChild()
  ],
})
export class CategoriePageModule {}
