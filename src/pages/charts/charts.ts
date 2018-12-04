import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { Chart } from 'chart.js';


/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  tempRef: Observable<any[]>;

  labels: any[] = [];
  data: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {
    this.tempRef = this.angularDB.list('sensor', ref => ref.orderByKey().limitToLast(5)).valueChanges();

    this.tempRef.subscribe(dato => {
      this.data = [];
      this.labels = [];
      dato.map(temp => {
        this.labels.push(temp.date + ' ' + temp.time)
        this.data.push(temp.temp);
      });
      this.basicChart(this.labels, this.data);
    });
    console.log(this.labels);
    console.log(this.data);

  }


  basicChart(labels, data) {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'line',
      responsive: true,
      aspectRatio: 10,
      data: {
        labels: labels,
        datasets: [{

          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true,
              display:false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display:false
            }
          }]
        }
      }

    });
  }

}
