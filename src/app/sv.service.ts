import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SVService {

  constructor(private http: HttpClient) { }

  getdata(){
    this.http.get('https://reqres.in/api/login').subscribe((data: any)=>{
      console.log(data);
    })
  }



}
