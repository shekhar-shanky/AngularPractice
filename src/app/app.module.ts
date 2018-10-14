import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ViewContainerRef } from '@angular/core'

import { EventAppComponent } from './event-app.component'
import { EventListComponent } from './events/event-list.components'
import { EventThumbnailComponent } from './events/event-thumbnail.components'
import { EventDetailsComponents } from './events/event-details/event-details.components'
import { AppNavComponent } from './nav/app-nav.components'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'

import { RouterModule, Routes } from '@angular/router'
import { appRoutes } from '../routes'
import { CreateEventsComponent } from './events/create-event.components';
import { Error404Component } from './events/404.components';
import { EventrRouteActivator } from './events/event-route-activator.service';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponents,
    AppNavComponent,
    CreateEventsComponent,
    Error404Component
  ],
  providers: [EventService, ToastrService, EventrRouteActivator],
  bootstrap: [EventAppComponent]
})
export class AppModule {  
}
