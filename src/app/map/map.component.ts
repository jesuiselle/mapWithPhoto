import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  result: any[];
  options: any;
  overlays: any[];

  infoWindow: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.options = {
      center: {lat: 48.1351253, lng: 11.5819805},
      zoom: 10.5
    };
    this.initOverlays();
    this.infoWindow = new google.maps.InfoWindow();
  }

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;

    if(isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent();
      event.map.setCenter(event.overlay.getPosition());
      this.router.navigate(['', 'photo', +title], {relativeTo: this.route});
    }
  }

  initOverlays() {
    //Get db.json
    this.http.get('https://my-json-server.typicode.com/jesuiselle/photo/db')
      .subscribe(response => {
        this.result = response['images'];
        let arr = [];
        let index: number = 0;
        if ( !this.overlays || !this.overlays.length) {
          //Marker with db.json
          for (let entry of this.result) {
            index++;
            arr.push(new google.maps.Marker({position: {lat: +entry.lat, lng: +entry.lng}, title: String(entry.id) }));
          }
        }
        this.overlays = arr;
      });
    //End db.json

  }

  zoomIn(map) {
    map.setZoom(map.getZoom()+1);
  }

  zoomOut(map) {
    map.setZoom(map.getZoom()-1);
  }
}
