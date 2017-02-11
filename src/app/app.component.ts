import { Component } from '@angular/core'

// at this stage they call it a Router Component

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {

    title = 'Tour of Heroes';

}