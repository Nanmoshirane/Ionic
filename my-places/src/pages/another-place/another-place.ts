import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AwesomePlacePage} from '../awesome-place/awesome-place';


@IonicPage()
@Component({
  selector: 'page-another-place',
  templateUrl: 'another-place.html',
})
export class AnotherPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnotherPlacePage');
  }
  
  pushAwesomePlace(){
    this.navCtrl.push(AwesomePlacePage);
  }

}
