import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http : HttpClient) { }

  getTour(){
    return this.http.get<any>(`${baseUrl}/tour`);
  }

  getTourDetail(id: string){
    return this.http.get<any>(`${baseUrl}/tour/${id}`);
  }
}
