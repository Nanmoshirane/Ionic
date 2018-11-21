import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HelloPage } from './hello';

@NgModule({
  declarations: [
    HelloPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloPage),
    TranslateModule.forChild()
  ],
  exports :[HelloPage]
})
export class HelloPageModule {}
