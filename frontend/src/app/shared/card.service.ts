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

  deleteCard(id : number): void{
    this.http.delete(this.baseUrl + 'cards/' + id).subscribe()
  }

  updateCard(id: number, card: Card): any{
    return this.http.put(this.baseUrl + 'cards/' + id,card).pipe()
  }


  getCardById(id:number): Observable<Card>{
    return this.http.get<Card>(this.baseUrl + 'cards/' + id)
  }

  create(card: Card): void {
    this.http.post<Card>(this.baseUrl, card).subscribe();
  }





}
