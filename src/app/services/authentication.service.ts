import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  webApiUrl: string = 'https://localhost:44311/api/Login';

  constructor(private http:HttpClient) { }

  login(Email:string, Password:string) {
    return this.http.post<any>(this.webApiUrl, {Email, Password}, {headers: {skip: "true"}})
      .pipe(map(data => {
        localStorage.removeItem('token');

        localStorage.setItem('token', JSON.stringify(data));
      }));
  }
  logout(){
    localStorage.removeItem('token');
  }

}
