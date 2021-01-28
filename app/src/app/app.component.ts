import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  loadWBL()
  {
    this.obs = this.http.get("https://3000-d766b76c-7489-417f-af03-6da1477f474f.ws-eu03.gitpod.io/wbl");
    this.obs.subscribe(this.getData);

  }

    getData = (data) => {
    console.log(data);
    this.results = data;
  }

}
