import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommunityComponent } from './community/community.component';
import { PredictionsComponent } from './predictions/predictions.component';


@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage implements AfterViewInit {

  // @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  // lineChart: any;

  segmentList: Array<string> = ["Community", "Predictions"];
  selectedSegment: string = this.segmentList[0];

  slides = [
    CommunityComponent, PredictionsComponent
  ]

  _segmentSelected(index: number) {
    this.selectedSegment = this.segmentList[index]
  }

  constructor() { }

  ngAfterViewInit() {
    // this.lineChartMethod();
  }
}

// lineChartMethod() {
//   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
//     type: 'line',
//     data: {
//       labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
//       datasets: [
//         {
//           label: 'Total Course Commencement',
//           fill: false,
//           lineTension: 0.1,
//           backgroundColor: 'rgba(75,192,192,0.4)',
//           borderColor: 'rgba(75,192,192,1)',
//           borderCapStyle: 'butt',
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: 'miter',
//           pointBorderColor: 'rgba(75,192,192,1)',
//           pointBackgroundColor: '#fff',
//           pointBorderWidth: 1,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//           pointHoverBorderColor: 'rgba(220,220,220,1)',
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
//           spanGaps: false,
//         },

//         {
//           label: 'Total Course Completion',
//           fill: false,
//           lineTension: 0.1,
//           backgroundColor: 'rgba(75,192,192,0.4)',
//           borderColor: 'rgba(75,192,192,1)',
//           borderCapStyle: 'butt',
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: 'miter',
//           pointBorderColor: 'rgba(75,192,192,1)',
//           pointBackgroundColor: '#fff',
//           pointBorderWidth: 1,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//           pointHoverBorderColor: 'rgba(220,220,220,1)',
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [78, 25, 41, 70, 82, 48, 91, 28, 5, 52, 23, 9],
//           spanGaps: false,
//         },

//         {
//           label: 'Total Points',
//           fill: false,
//           lineTension: 0.1,
//           backgroundColor: 'rgba(75,192,192,0.4)',
//           borderColor: 'rgba(75,192,192,1)',
//           borderCapStyle: 'butt',
//           borderDash: [],
//           borderDashOffset: 0.0,
//           borderJoinStyle: 'miter',
//           pointBorderColor: 'rgba(75,192,192,1)',
//           pointBackgroundColor: '#fff',
//           pointBorderWidth: 1,
//           pointHoverRadius: 5,
//           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//           pointHoverBorderColor: 'rgba(220,220,220,1)',
//           pointHoverBorderWidth: 2,
//           pointRadius: 1,
//           pointHitRadius: 10,
//           data: [54, 8, 81, 29, 29, 21, 82, 37, 39, 51, 72, 21],
//           spanGaps: false,
//         }
//       ]
//     }
  // });
// }


