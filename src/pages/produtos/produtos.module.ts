import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';

@NgModule({
  declarations: [
    ProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
  ],
})
export class ProdutosPageModule {}
