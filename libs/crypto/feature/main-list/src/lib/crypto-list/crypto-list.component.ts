import { Component, OnInit } from '@angular/core';
import { RestService } from 'libs/shared/data-access/src/lib/services/rest-service';
import { Observable } from 'rxjs';
import { CryptocurrencyEntity } from 'libs/crypto/data-access/models/cryptocurrency-entity';
@Component({
  selector: 'myorg-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {

  cryptocurrencyList$: Observable<CryptocurrencyEntity[]>;
  constructor(private cryptoService: RestService) { }

  ngOnInit() {
    this.cryptocurrencyList$ = this.cryptoService.getCryptocurrencyEntityList('USD');
    this.cryptoService.getCryptocurrencyDetais(10).subscribe( val => console.log(val));
  }

}
