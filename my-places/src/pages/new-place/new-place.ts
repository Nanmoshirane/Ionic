import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { AnotherPlacePage } from '../another-place/another-place';
import { PlacesService } from '../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';
import { NavParams } from 'ionic-angular/navigation/nav-params';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';   

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};
  lat: number;
  lng: number;
  constructor(private placesService: PlacesService, private navCtrl: NavController, private geolocation: Geolocation, private navParams: NavParams) {

  }

 
  pushAnotherPlacePage(){
     this.navCtrl.push(AnotherPlacePage);
  }

  onAddPlace(value: {title: string, desc: string}) {
    this.placesService.addPlace({title: value.title, desc: value.desc, location: this.location});
    this.navCtrl.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition().then((location) => {
      console.log('Location fetched successfully' && " " && location.coords.latitude && " "  && location.coords.longitude)
      this.location.lat = location.coords.latitude;
      this.location.lng = location.coords.longitude;

      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
       data.coords.latitude 
       data.coords.longitude 
     });
  }
}
