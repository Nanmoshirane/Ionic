import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from '../../services/places.service';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PlacePage } from '../place/place';
import { Place } from '../../modal/place.modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];
  constructor(public navCtrl: NavController, private placeService: PlacesService, private modalCtrl: ModalController) {

  }
  
  ionViewWillEnter() {
    this.placeService.getPlaces()
      .then(
        (places) => this.places = places
      );
  }

  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place) {
    this.modalCtrl.create(PlacePage, place).present();
  }
}
