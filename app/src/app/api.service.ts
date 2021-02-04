import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseUrl = `https://3000-be790659-dddc-4757-9b14-dc219ff10d3a.ws-eu03.gitpod.io`;

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

        getWp() {
    const url = `${this.baseUrl}/wp`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

          getpay() {
    const url = `${this.baseUrl}/pay`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }


}
