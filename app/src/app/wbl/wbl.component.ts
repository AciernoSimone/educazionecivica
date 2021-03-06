import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ParamMap } from '@angular/router';



@Component({
  selector: 'app-wbl',
  templateUrl: './wbl.component.html',
  styleUrls: ['./wbl.component.css']
})
export class WblComponent {
    query: string;
  apiServiceObs: Observable<Object>;
  results: any;




    constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private service: ApiService){}




  loadWBL() : void
  {
    this.apiServiceObs = this.api.getWbl();
    this.apiServiceObs.subscribe(this.getData);

  }

    getData = (data) => {
    console.log(data);
    this.results = data;
    this.convertData(this.results)
  }


  convertData(data){

        for (var i in data) {
      const region = data[i]["Region"];

      const index = parseFloat(data[i]['Overall Gender Equality Index']);
      this.myData.push([region, index]);
      }
      console.log(this.myData)
    }


  myType = 'AreaChart';
myData = [
  ];






}
