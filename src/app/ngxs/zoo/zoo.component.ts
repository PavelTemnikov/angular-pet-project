import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAnimal, FeedAnimals } from '../actions/animal.actions';
import { ZooStateModel } from '../states/zoo.state';

@Component({
    selector: 'app-zoo',
    template: `
        <input [formControl]="name">
        <button type="button" (click)="addAnimal()">Add Animal</button>

        <button type="button" (click)="feedAnimals()">Feed Animals</button>

        <div>feed: {{feed$ | async}}</div>
    `,
    styles: [
    ]
})
export class ZooComponent {
    name = new FormControl('');

    @Select((state: { zoo: ZooStateModel}) => state.zoo.feed) feed$!: Observable<boolean>;

    constructor(private store: Store) {}

    addAnimal(): void {
        this.store.dispatch(new AddAnimal(this.name.value || '')).subscribe(() => this.name.reset());
    }

    feedAnimals(): void {
        this.store.dispatch(new FeedAnimals());
    }
}
