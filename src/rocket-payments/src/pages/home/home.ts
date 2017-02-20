import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {BetaalmethodetoevoegenPage} from '../betaalmethodetoevoegen/betaalmethodetoevoegen'
import {BetaalMethodeOverzichtPage} from '../betaal-methode-overzicht/betaal-methode-overzicht'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nav:NavController;

    constructor(public navCtrl: NavController) {
    this.nav = navCtrl
  }

  public  nextPage () {
    this.nav.push(BetaalMethodeOverzichtPage)

  }

}
