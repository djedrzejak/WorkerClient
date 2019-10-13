import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../model/status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getStatuses(): Observable<Array<Status>> {
    return this.http.get<Array<Status>>('http://djedrzejak-worker-manager-serv.herokuapp.com/statuses');
  }

}
