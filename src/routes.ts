import { Routes } from '@angular/router'
import { EventListComponent } from './app/events/event-list.components'
import { EventDetailsComponents } from './app/events/event-details/event-details.components'
import { CreateEventsComponent } from './app/events/create-event.components';
import { Error404Component } from './app/events/404.components';
import { EventrRouteActivator } from './app/events/event-route-activator.service';
import { ToastrService } from './app/common/toastr.service';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventsComponent},
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponents, canActivate: [EventrRouteActivator], canActivateChild: [ToastrService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]