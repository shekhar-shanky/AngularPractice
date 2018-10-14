import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.components.html',
    styleUrls: ['event-thumbnail.components.css']
})

export class EventThumbnailComponent {
    @Input() eventInput:any
    @Output() eventOutput = new EventEmitter()

    someProp:String = "Default Property - Log Foo From Child TS"

    constructor(private toastr:ToastrService, private router: Router){

    }

    handleClickMe(){
        this.eventOutput.emit('Registerd for event '+ this.eventInput.name)
        this.handleThumbnailClick(this.eventInput.name) 
        this.router.navigate(['/events', this.eventInput.id])
    }

    logFoo(){
        this.eventInput.name = this.someProp
        console.log('logging foo')
    }

    getStartTimeClass(){
        if(this.eventInput && this.eventInput.time === '8:00 am')
            return ['lime', 'bold']
        else if (this.eventInput && this.eventInput.time === '10:00 am')
            return ['red', 'bold']
        return []
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