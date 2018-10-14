
import { Component } from "@angular/core"
import { Router } from "@angular/router";

@Component({
    selector: 'create-event',
    template: `
        <h1>New Event </h1>
        <hr>
        <div>
            <h3>[Create Event Form will go here]</h3>
            <br/>
            <br/>
            <button type="submit" class="btn btn-primary">Save</button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <button type="button" class="btn btn-default" (click)="clickCancek()">Cancel</button>
            
        </div>
    `

})

export class CreateEventsComponent {

    constructor(private router: Router){

    }

    clickCancek(){
        this.router.navigate(['/events'])
    }

}