import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OverzichtMastercardPage} from '../overzicht-mastercard/overzicht-mastercard'
//import {PieChartComponent} from '../../components/pie-chart/pie-chart'
import {OverzichtPaypalPage} from "../overzicht-paypal/overzicht-paypal";
/*
  Generated class for the BetaalMethodeOverzicht page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-betaal-methode-overzicht',
  templateUrl: 'betaal-methode-overzicht.html',
  //providers:[PieChartComponent]
})
export class BetaalMethodeOverzichtPage {

  nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nav = navCtrl
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BetaalMethodeOverzichtPage');
  }

  mastercardNext(){
    this.nav.push(OverzichtMastercardPage)
  }
  paypalNext(){
    this.nav.push(OverzichtPaypalPage)
  }

  public pieChartLabels:string[] = ['Safe', 'Unsafe'];
  public pieChartData:number[] = [500, 100];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
