import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServices {
  constructor(private http: HttpClient) { }

  GetConsultar() {
    console.log('dados');

    return this.http.get('https://viacep.com.br/ws/29149408/json');
  }
}
