import { Injectable} from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router'
import { EventService } from './shared/event.service';

@Injectable()
export class EventrRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const valueExists = !!this.eventService.getEventById(+route.params['id'])
        console.log('***************************************')
        console.log(+route.params['id'])
        console.log(valueExists)
        console.log('***************************************')
        if(!valueExists) {
            this.router.navigate(['/404'])
        }
        return valueExists
        
    }
}