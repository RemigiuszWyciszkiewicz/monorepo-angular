import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptocurrencyDetails } from 'libs/crypto/data-access/models/cryptocurrency-details';
import { RestService } from 'libs/shared/data-access/src/lib/services/rest-service';

@Component({
  selector: 'myorg-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.scss']
})
export class CryptoDetailComponent implements OnInit {

  constructor(private router: Router, private rotue: ActivatedRoute, private restService: RestService) { }

  cryptocurrencyDetails$: Observable<CryptocurrencyDetails>;
  cryptocurrencytSymbol: string;

  ngOnInit() {
    this.rotue.paramMap.subscribe(val =>
      this.cryptocurrencytSymbol=val.get('id')
      );

    this.restService.getCryptocurrencyDetais(this.cryptocurrencytSymbol).subscribe( val => this.cryptocurrencyDetails$ = val);
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.rotue});
  }

}
