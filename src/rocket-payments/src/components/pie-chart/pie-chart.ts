import { Component } from '@angular/core';

/*
  Generated class for the PieChart component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/

@Component({
  selector: 'pie-chart',
  templateUrl: 'pie-chart.html'
})
export class PieChartComponent {

  text: string;

  constructor() {
    console.log('Hello PieChart Component');
    this.text = 'Hello World';
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
