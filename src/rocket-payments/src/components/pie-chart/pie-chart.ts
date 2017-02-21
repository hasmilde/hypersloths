import { Component } from '@angular/core';

/*
  Generated class for the PieChart component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/

@Component({
  selector: 'pie-chart',
  templateUrl: 'pie-chart.html',
  styles:[`
    .chart {
      display: block;
    }`]
})
export class PieChartComponent {



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
