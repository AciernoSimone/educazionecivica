import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ParamMap } from '@angular/router';


@Component({
  selector: 'app-ww',
  templateUrl: './ww.component.html',
  styleUrls: ['./ww.component.css']
})
export class WwComponent {

    query: string;
  apiServiceObs: Observable<Object>;
  results: any;



    constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService){}



      loadWW() : void
  {
    this.apiServiceObs = this.api.getWW();
    this.apiServiceObs.subscribe(this.getData);

  }

    getData = (data) => {
    console.log(data);
    this.results = data;
    this.convertData(this.results)
  }

    convertData(data){

        for (var i in data) {
      const year = parseFloat(data[i]["WBL Report Year"]);
      const yn = data[i]["Can a woman get a job in the same way as a man?"];
      const region = data[i]["Region"];
      this.myData.push([year,region, yn]);
      }
      console.log(this.myData)
    }


  myType = 'Table';
myData = [
  ];

}
