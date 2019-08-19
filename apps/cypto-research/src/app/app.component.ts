import { Component, OnInit } from '@angular/core';
import { RestService } from 'libs/shared/data-access/src/lib/services/rest-service';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'cypto-research';

  constructor(private restService: RestService) {}
  ngOnInit(): void {
   // console.log(this.restService.getCryptocurrencyEntityList('USD').subscribe(data => console.log(data)));
  }


}
