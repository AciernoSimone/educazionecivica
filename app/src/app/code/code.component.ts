import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {

    query: string;
  apiServiceObs: Observable<Object>;
  results: any;



    constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService){}



  loadWp() : void
  {
    this.apiServiceObs = this.api.getWp();
    this.apiServiceObs.subscribe(this.getData);

  }

    getData = (data) => {
    console.log(data);
    this.results = data;
    this.convertData(this.results)
  }

  convertData(data){

        for (var i in data) {
      const region = data[i]["Country"];
      const year = parseFloat(data[i]["Value"]);
      this.myData.push([region,year]);
      }
      console.log(this.myData)
    }


  myType = 'AreaChart';
myData = [
  ];


}
