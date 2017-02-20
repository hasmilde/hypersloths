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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UitlegPage,
    BetaalmethodetoevoegenPage,
    BetaalMethodeOverzichtPage,
    OverzichtMastercardPage,
    PieChartComponent,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UitlegPage,
    BetaalmethodetoevoegenPage,
    BetaalMethodeOverzichtPage,
    OverzichtMastercardPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
