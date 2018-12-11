import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { Chart } from 'chart.js'

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  tempRef: Observable<any[]>;
  tempRef2: Observable<any[]>;
  tempRef3: Observable<any[]>;

  labels: any[] = [];

  data: any[] = [];

  day: any[] = [];
  days: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {

    this.tempRef = this.angularDB.list('sensor', ref => ref.orderByKey().limitToLast(10)).valueChanges();
    this.tempRef.subscribe(dato => {
      this.data = [];
      this.labels = [];
      dato.map(temp => {
        this.labels.push(temp.time);
        this.data.push(temp.temp);

        this.day = (temp.date);
      });
      this.basicChart(this.labels, this.data);
    });

    this.tempRef = this.angularDB.list('sensor', ref => ref.orderByChild('date')).valueChanges();
    this.tempRef.subscribe(dato => {
      this.days = dato;
      
        dato.indexOf(actions => {
          console.log(actions.date)
        })

    })

  }

  basicChart(labels, data) {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'line',
      responsive: true,

      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'transparent',
          ],
          borderColor: [
            'rgb(65, 139, 223)'
          ],
          borderWidth: 2
        }],
      },

      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
            },
            ticks: {
              beginAtZero: true,
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
            },
            ticks: {
              beginAtZero: true,
              max: 40,
              min: 5,
            }
          }]
        }
      }

    });
  }

}
