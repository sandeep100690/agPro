import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})

export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "Offline";

  getServerStatus(){
    return this.serverStatus;
  }

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
