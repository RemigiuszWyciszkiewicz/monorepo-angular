import { Component, OnInit, Input, ContentChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'myorg-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent implements AfterViewInit {
  @ContentChildren('body') rows: QueryList<any>;

  ngAfterViewInit() {
   this.rows.forEach( a => console.log(a));
   console.log(this.rows);
  }

}
