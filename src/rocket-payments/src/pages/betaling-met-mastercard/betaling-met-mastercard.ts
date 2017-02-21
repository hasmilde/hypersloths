import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx'
/*
  Generated class for the BetalingMetMastercard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-betaling-met-mastercard',
  templateUrl: 'betaling-met-mastercard.html'
})
export class BetalingMetMastercardPage {
  http:Http;
  public data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, http:Http) {
    this.http = http

    http.get('https://google.com').map(res => res.json()).subscribe(
      (data) => {
        this.data = data;
      }
    );
    http.post('https://google.com',{}).map(res => res.json()).subscribe((data) => {console.log(data)})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BetalingMetMastercardPage');
  }



}
