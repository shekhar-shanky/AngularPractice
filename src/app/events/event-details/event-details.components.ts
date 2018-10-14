import { Injectable, OnInit, Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";



@Component({
    templateUrl: './event-details.components.html',
    styles: [`
        .container { padding-left: 20px; padding-right:20px; }
        .img-size { height: 100px; }
    `]
})

@Injectable()
export class EventDetailsComponents implements OnInit{

    event:any

    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventService.getEventById(+this.route.snapshot.params['id'])
    }

}