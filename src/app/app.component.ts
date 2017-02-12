import { Component } from '@angular/core'

// at this stage they call it a Router Component

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {

    title = 'Tour of Heroes';

}