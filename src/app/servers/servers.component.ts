import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // ################################## attribute selector
  // selector: '[app-servers]',
  // ################################## class selector
  // selector: '.app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
