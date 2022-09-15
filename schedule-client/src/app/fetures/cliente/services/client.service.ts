import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "";

  constructor(private http: HttpClient) { }

  getclient(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
