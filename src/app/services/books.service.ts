import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Observable} from "rxjs";
import {User} from "../models/user";
import {Book} from "../models/books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  webApiUrl: string = 'https://localhost:44311/api/Books';
  constructor(private http: HttpClient){}

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.webApiUrl);
  }

  get(id: any): Observable<Book>{
    return  this.http.get<Book>(this.webApiUrl+"/"+id);
  }

  create(data: any): Observable<any>{
    return this.http.post(this.webApiUrl,data);
  }

  update(id: any, data: any):Observable<any>{
    return this.http.put(this.webApiUrl,data);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(this.webApiUrl+"/"+id);
  }

}
