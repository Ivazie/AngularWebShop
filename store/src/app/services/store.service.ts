import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const STORE_URL = 'http://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient ) { }

  getAllProducts(limit = '12', sort= 'desc'): Observable{

  }

}
