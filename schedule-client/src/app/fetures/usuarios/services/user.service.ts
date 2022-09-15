import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { userInterface } from 'src/app/core/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  public getID(id: string): Observable<any> {
    const _url = `${this.url}/${id}`
    return this.http.get(_url);
  }

  public post(request: any ): Observable<any> {
    return this.http.post(this.url,request);
  }

  public put(id: string, request: any): Observable<any> {
    const _url = `${this.url}/${id}`
    return this.http.put(_url, request);
  }

  public delete(id: string): Observable<any> {
    const _url = `${this.url}/${id}`
    return this.http.delete(_url);
  }
}
