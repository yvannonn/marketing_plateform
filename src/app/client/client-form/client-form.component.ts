import { Component,Input} from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

@Input() client:Client;

  onSubmit(){}
}
