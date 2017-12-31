import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') map: ElementRef;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const position = new google.maps.LatLng(-2.6289487, -44.3999958);

    const options = {
      center: position,
      zoom: 10,
      mapTypeId: 'hybrid'
    };

    const map = new google.maps.Map(this.map.nativeElement, options);

    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
}
