import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, withLatestFrom } from 'rxjs';
import { AddAnimal, FeedAnimals } from '../actions/animal.actions';
import { ZooStateModel } from '../states/zoo.state';

@Component({
    selector: 'app-zoo',
    template: `
        <input [formControl]="name">
        <button type="button" (click)="addAnimal()">Add Animal</button>

        <button type="button" (click)="feedAnimals()">Feed Animals</button>

        <div>feed: {{feed$ | async}}</div>
        
        <div>
          <ul>
            List of animals
            <li *ngFor="let animal of animals$ | async">{{animal}}</li>
          </ul>
        </div>
        
        <button type="button" (click)="consoleStoreState()">Console Store State</button>
        <button type="button" (click)="resetState()">Reset State</button>
    `,
    styles: [
    ]
})
export class ZooComponent {
    name = new FormControl('');

    @Select((state: { zoo: ZooStateModel}) => state.zoo.feed) feed$!: Observable<boolean>;
    @Select((state: { zoo: ZooStateModel}) => state.zoo.animals) animals$!: Observable<string[]>;

    constructor(private store: Store) {}

    addAnimal(): void {
        this.store
            .dispatch(new AddAnimal(this.name.value || ''))
            .pipe(withLatestFrom(this.animals$))
            .subscribe(([_, animals]) => {
                console.log(animals);
                this.name.reset();
            });
    }

    feedAnimals(): void {
        this.store.dispatch(new FeedAnimals());
    }

    consoleStoreState(): void {
        console.log(this.store.snapshot());
    }

    resetState(): void {
        this.store.reset({ zoo: { feed: true, animals: ['first', 'second']} })
    }
}
