import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController} from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/Rx'


import {MemoryStoreComponent} from '../../components/memory-store/memory-store'
/*
  Generated class for the BetalingMetMastercard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-betaling-met-mastercard',
  templateUrl: 'betaling-met-mastercard.html',
  providers:[MemoryStoreComponent]
})
export class BetalingMetMastercardPage {
  http:Http;
  public payment: any={};
  alertCtrl: AlertController;
  memory: MemoryStoreComponent
  toastCtrl: ToastController
  constructor(public navCtrl: NavController, public navParams: NavParams, http:Http, toastContr:ToastController, alert:AlertController, mem:MemoryStoreComponent) {
    this.http = http
    this.toastCtrl = toastContr;
    this.alertCtrl = alert;
    this.memory = mem

    // http.get('https://google.com').map(res => res.json()).subscribe(
    //   (data) => {
    //     this.data = data;
    //   }
    // );
    // http.post('https://google.com',{}).map(res => res.json()).subscribe((data) => {console.log(data)})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BetalingMetMastercardPage');
  }

  public submitPayment (){

    this.showPrompt()


  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Payment transferred successfuly',
      duration: 3000,
      position: 'top'
    });



    toast.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Confirm',
      message: "Enter your 5 digit pin to confirm the payment",
      inputs: [
        {
          name: '5 Digit Pin',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            this.ipcStuff();
          }
        }
      ]
    });
    prompt.present();
  }

  ipcStuff(){
    this.presentToast()

  }



}
