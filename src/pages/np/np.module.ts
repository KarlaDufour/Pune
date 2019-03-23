import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NpPage } from './np';

@NgModule({
  declarations: [
    NpPage,
  ],
  imports: [
    IonicPageModule.forChild(NpPage),
  ],
})
export class NpPageModule {}
