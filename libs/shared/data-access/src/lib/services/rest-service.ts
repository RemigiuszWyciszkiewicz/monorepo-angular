import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CryptocurrencyEntity } from 'libs/crypto/data-access/models/cryptocurrency-entity';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpClient: HttpClient) {}

  headers = new HttpHeaders({
    Accept: 'application/json',
    'X-CMC_PRO_API_KEY': '4f6a4ce3-f9d1-408c-8db9-147fc67aa482',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  });

  getCryptocurrencyEntityList(currencySymbol: string): Observable<CryptocurrencyEntity[]> {
    return this.httpClient
      .get<any>(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,52,1831,2,1765,1839,83,512,2010,1958,328,131,1720,873,1376&convert=${currencySymbol}`,
        { headers: this.headers }
      )
      .pipe(
        map(value =>
          Object.values(value['data']).map(
            value =>
              new CryptocurrencyEntity(
                value['id'],
                value['name'],
                value['symbol'],
                value['quote'][`${currencySymbol}`]['price'],
                value['quote'][`${currencySymbol}`]['percent_change_1h'],
                value['quote'][`${currencySymbol}`]['percent_change_24h'],
                value['quote'][`${currencySymbol}`]['percent_change_7d'],
                value['quote'][`${currencySymbol}`]['market_cap']
              )
          )
   
        )
    
      );
  }

  // getCryptocurrencyDetais(): Observable<CryptocurrencyEntity> {
  //   return this.httpClient.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=10');
  // }
}

// Object.values(value['data'])
