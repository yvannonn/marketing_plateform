import { Component,OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-register',

 template: `
 <h2> Regiter client  </h2>
 <app-client-form [client] ="client" ></app-client-form>
 `
})
export class ClientRegisterComponent implements OnInit {

  client: Client;
  ngOnInit(): void {
     this.client = new Client();
  }



}
