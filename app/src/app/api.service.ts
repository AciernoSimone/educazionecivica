import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = `https://3000-e3f09857-4caf-4e32-a8ee-9c94568d11de.ws-eu03.gitpod.io`;

  getWbl() {
    const url = `${this.baseUrl}/wbl`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

    getWW() {
    const url = `${this.baseUrl}/wbl`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }
      getRel() {
    const url = `${this.baseUrl}/wbl`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

        getCode() {
    const url = `${this.baseUrl}/code`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }


}
