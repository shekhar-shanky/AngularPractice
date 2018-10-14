import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'event-list',
    templateUrl: 'event-list.components.html'
})

export class EventListComponent implements OnInit{

  events:any[]

  constructor(private eventService: EventService, private toastr: ToastrService){
  }

  event = {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2019',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
      }
  }

  handleEventClicked(data){
      console.log('received from thumbnail: ', data)
  }

  ngOnInit(){
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName) {
    if(eventName === 'Angular Connect')
      this.toastr.warning(eventName, 'WARNING')
    else if(eventName === 'ng-nl')
      this.toastr.error(eventName, 'ERROR')
    else if(eventName === 'ng-vegas')
      this.toastr.info(eventName, 'INFO')
    else 
      this.toastr.success(eventName, 'SUCCESS')
  }
  
}