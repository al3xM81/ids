import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwDataService {

  API_URL = 'https://akabab.github.io/starwars-api/api/all.json';

  constructor(private httpService: HttpClient) { }

  public getAllImages()  {    
    return this.httpService.get<any>(this.API_URL);
  }
}
