import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {
  constructor() { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

  ngOnInit(): void {
  }

  ionViewDidLoad() {
    // lineChart = new Chart({
    //   chart: {
    //     type: 'line'
    //   },
    //   title: {
    //     text: 'Overall Course Performance'
    //   },
    //   credits: {
    //     enabled: false
    //   },
    //   series: [
    //     {
    //       name: 'Total Course Commencement',
    //       data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
    //     },
    //     {
    //       name: 'Total Course Completion',
    //       data: [5, 8, 12, 15, 20, 25, 18, 14, 10, 6, 3]
    //     },
    //     {
    //       name: 'Total Points',
    //       data: [15, 10, 8, 14, 25, 22, 30, 18, 12, 9, 5]
    //     }
    // });
  }
  
  


}