import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormFileds, FormFiledsJSON } from './form-field';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  getFormFileds():Observable<FormFileds>{
      return this.httpClient.get<FormFileds>("http://localhost:3000/data")
  }
}
