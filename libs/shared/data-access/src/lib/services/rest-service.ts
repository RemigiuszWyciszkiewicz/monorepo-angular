import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpClint: HttpClient) {}

  headers = new HttpHeaders({
    Accept: 'application/json',
    'X-CMC_PRO_API_KEY': '4f6a4ce3-f9d1-408c-8db9-147fc67aa482',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  });
  
  getCryptoList(): Observable<any> {
    return this.httpClint.get<any>(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,52,1831,2,1765,1839,83,512,2010,1958,328,131,1720,873,1376&convert=USD',
      { headers: this.headers }
    );
  }
}
