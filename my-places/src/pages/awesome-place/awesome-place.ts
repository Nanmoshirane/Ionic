import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewPlacePage} from "../new-place/new-place";
/**
 * Generated class for the AwesomePlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-awesome-place',
  templateUrl: 'awesome-place.html',
})
export class AwesomePlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwesomePlacePage');
  }

  rClicks(){
    this.navCtrl.push(NewPlacePage);
 }
}
