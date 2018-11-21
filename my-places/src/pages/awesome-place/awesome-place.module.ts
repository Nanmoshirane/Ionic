import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwesomePlacePage } from './awesome-place';

@NgModule({
  declarations: [
    AwesomePlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AwesomePlacePage),
  ],
})
export class AwesomePlacePageModule {}
