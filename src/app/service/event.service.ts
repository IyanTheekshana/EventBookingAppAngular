import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRespone } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private http = inject(HttpClient);

  private apiUrl: string = "https://freeapi.miniprojectideas.com/api/EventBooking/";
  
  constructor() { }

  getAllEvents(){
    return this.http.get<IAPIRespone>(this.apiUrl + "GetAllEvents");
  }
}
