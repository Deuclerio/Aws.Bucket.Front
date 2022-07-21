import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';
import { ApiServices } from './ApiServices';


@Injectable({
  providedIn: 'root'
})
export class ServicesBucket {
  constructor(private http: HttpClient, private apiServices: ApiServices) { }


  // testesx : testes = {cep : ''};

  GetConfig(): S3 {

    const httpOptions = {
 	 	headers: new HttpHeaders()
	}

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');

	this.http.get('https://viacep.com.br/ws/29149408/json', httpOptions).subscribe((result: any) => { console.log(result)});;

    let resultado ;

    // this.http.get<any>('https://viacep.com.br/ws/29149408/json').subscribe((result: any) => { console.log(result)});

    this.http.get<any>('https://viacep.com.br/ws/29149408/json').subscribe(result => { resultado = result });

    console.log('resultado apix ' + resultado)
    return new S3({
      accessKeyId: "",
      secretAccessKey: "",
      region: ""
    });
  };

  GetBuckerName(): string {
    return "nameBucket";
  };


  GetConsultar() {
    return this.http.get('https://viacep.com.br/ws/29149408/json');
  }
}


export class testes {

  public cep : string | undefined;

}
