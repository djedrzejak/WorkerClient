import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService) {}

  clients: Array<Client>;
  selectedClient: Client;

  ngOnInit() {
    this.getClients();
    this.onClear();
  }

  getClients() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
  }

  private onClear() {
    this.selectedClient = new Client();
  }

  editClient() {
    if (this.selectedClient.id != null) {
      this.clientService.updateClient(this.selectedClient).subscribe(client => {
        console.log('Update');
      });
    }
  }

  addNewClient() {
    if (this.selectedClient.id != null) {
      this.selectedClient.id = null;
      console.log('Clear id');
    }
    this.clientService.saveClient(this.selectedClient).subscribe(() => {
      this.getClients();
    });
    console.log('Save');
  }

}
