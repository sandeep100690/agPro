import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // ################################## attribute selector
  // selector: '[app-servers]',
  // ################################## class selector
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }
 
  ngOnInit(): void {
  }

}
