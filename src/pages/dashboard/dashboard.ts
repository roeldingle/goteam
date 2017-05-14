import { Component } from '@angular/core';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  chartOptions : any;

  constructor() {
  	this.chartOptions = {
  			chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [
            {
                name: 'NULL',
                y: 10,
            },

            {
                name: 'Attendance',
                y: 20
            }, {
                name: 'Productivity',
                y: 40,
            },{
                name: 'NPS',
                y: 20,
            }, {
                name: 'Team dynamics',
                y: 10
            }]
        }]
  	}
  }
}
