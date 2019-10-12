import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable <Array<Client>> {
    return this.http.get<Array<Client>>('http://localhost:8080/clients');
  }

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/clients', client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>('http://localhost:8080/clients/' + client.id, client);
  }
}
