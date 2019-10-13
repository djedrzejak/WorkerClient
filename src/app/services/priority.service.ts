import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Priority } from '../model/priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) { }

  getPriorities(): Observable<Array<Priority>> {
    return this.http.get<Array<Priority>>('http://djedrzejak-worker-manager-serv.herokuapp.com/priorities');
  }

}
