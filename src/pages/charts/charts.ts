import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import { AngularFireDatabase } from '@angular/fire/database';
import { Chart } from 'chart.js';

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
  day: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularDB: AngularFireDatabase) {
    this.tempRef = this.angularDB.list('sensor', ref => ref.orderByKey().limitToLast(5)).valueChanges();

    this.tempRef.subscribe(dato => {
      this.data = [];
      this.labels = [];
      dato.map(temp => {
        this.labels.push(temp.time)
        this.data.push(temp.temp);
        this.day = (temp.date);
      });
      this.basicChart(this.labels, this.data);
    });
    console.log(this.labels);
    console.log(this.data);

  }

  ionViewDidLoad() {
    /*this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.screenOrientation.onChange().subscribe(
      () => {
          console.log("Orientation Changed");
      }
    );*/
  }

  basicChart(labels, data) {

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: labels,
        datasets: [{

          data: data,
          backgroundColor: [
            'transparent',
          ],
          borderColor: [
            'rgba(255,99,132,1)'

          ],
          borderWidth: 2
        }]
      },
      options: {
        legend:{
          display: false,
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display:true,
              labelString: 'Día'
            },
            ticks: {
              beginAtZero: true,
            }
          }],
          yAxes: [{
            scaleLabel: {
              display:true,
              labelString: 'Gradosc °C'
            },
            ticks:{
              beginAtZero: true,
              max: 30,
              min: 10
            }
          }]
        }
      }

    });
  }

}
