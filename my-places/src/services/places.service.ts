import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Place } from '../modal/place.modal';

@Injectable()
export class PlacesService {
    private places: Place[] = [];

    constructor (private storage: Storage) {
    //    this.storage.clear();
    }

    addPlace(place: Place) {
        this.places.push(place);
        // this.storage.ready().then(() => {});
        this.storage.set('places', this.places);
    }

    getPlaces(){
        this.storage.ready().then(() => {});
        return this.storage.get('places')
            .then(
               (places) => {
                   this.places = places == null ? [] : places;
                   return this.places.slice();
               } 
            );
        // return this.places.slice();
    }
}