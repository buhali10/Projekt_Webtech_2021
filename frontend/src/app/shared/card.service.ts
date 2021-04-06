import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Card} from "./cards";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAllCard(): Observable<Card[]>{
    return this.http.get<Card[]>(this.baseUrl + 'cards');
  }

  deleteCard(id : number): any{
    return this.http.delete<any>(this.baseUrl + 'cards/' + id).pipe();
  }

  updateCard(id: number, card: Card): any{
    return this.http.put(this.baseUrl + 'cards/' + id,card).pipe();
  }

  getCardById(id:number): Observable<Card>{
    return this.http.get<Card>(this.baseUrl + 'cards/' + id);
  }

  create(card: Card): Observable<Card> {
    return this.http.post<Card>(this.baseUrl+ 'cards/', card).pipe();
  }
}
