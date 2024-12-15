import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { IAPIRespone, IEvent } from '../../model/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  private eventService = inject(EventService);
  private destryRef = inject(DestroyRef);
  
  events: IEvent[] = []

  ngOnInit(): void {
    this.getEvents();


  }


  getEvents(){
   const subs = this.eventService.getAllEvents().subscribe((res: IAPIRespone)=>{
      this.events = res.data;
    })

    this.destryRef.onDestroy(
      ()=> subs.unsubscribe()
    )
  }

}
