import { Component, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { Worker } from './worker'
import { WORKERS } from './mock-workers'


@Component({
    moduleId: module.id,
    selector: 'worker-form',
    templateUrl: './worker-form.component.html'
})
export class WorkerFormComponent {

    constructor(
            private route: ActivatedRoute
        ) { 
        }

   @Input() model: Worker;
   submitted = false;

   onSubmit() { this.submitted = true; }
    newHero() { this.model = new Worker(); }

    ngOnInit(): void {
        this.newHero();
        console.log(this.route.params);
        this.route.params.switchMap((params: Params) => this.model.id = params['id']);
        console.log('Worker ID is %i', this.model.id);
    }

}