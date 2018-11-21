import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnotherPlacePage } from './another-place';

@NgModule({
  declarations: [
    AnotherPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AnotherPlacePage),
  ],
})
export class AnotherPlacePageModule {}
