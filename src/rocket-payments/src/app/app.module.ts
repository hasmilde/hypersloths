import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UitlegPage} from '../pages/uitleg/uitleg'
import { BetaalmethodetoevoegenPage} from '../pages/betaalmethodetoevoegen/betaalmethodetoevoegen'
import { BetaalMethodeOverzichtPage} from '../pages/betaal-methode-overzicht/betaal-methode-overzicht'
import {OverzichtMastercardPage} from "../pages/overzicht-mastercard/overzicht-mastercard";
import { ChartsModule } from 'ng2-charts';
import {PieChartComponent} from "../components/pie-chart/pie-chart";
import {LineChartComponent} from "../components/line-chart/line-chart";
import {OverzichtPaypalPage} from "../pages/overzicht-paypal/overzicht-paypal";
import {BetalingMetMastercardPage} from "../pages/betaling-met-mastercard/betaling-met-mastercard";
//import {Chart} from 'chart.js';
//import { ChartModule } from 'angular2-highcharts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UitlegPage,
    BetaalmethodetoevoegenPage,
    BetaalMethodeOverzichtPage,
    OverzichtMastercardPage,
    PieChartComponent,
    LineChartComponent,
    OverzichtPaypalPage,
    BetalingMetMastercardPage


  ],
  imports: [
    IonicModule.forRoot(MyApp),

    //Chart
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UitlegPage,
    BetaalmethodetoevoegenPage,
    BetaalMethodeOverzichtPage,
    OverzichtMastercardPage,
    OverzichtPaypalPage,
    BetalingMetMastercardPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
