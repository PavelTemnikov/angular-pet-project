import { Component, Injectable } from "@angular/core";
import { delay, of } from "rxjs";

////////// Services ///////////////
@Injectable()
export class ValueService {
    value = 'real value';

    getValue() { return this.value; }
    setValue(value: string) { this.value = value; }

    getObservableValue() { return of('observable value'); }
    getPromiseValue() { return Promise.resolve('promise value'); }
    getObservableDelayedValue() { return of('observable delayed value').pipe(delay(10)); }
}

@Injectable()
export class MasterService {
    constructor(private valueService: ValueService) { }

    getValue() { return this.valueService.getValue(); }
}

@Component({
    selector: 'lightswitch-comp',
    template: `
        <button type="button" (click)="clicked()">Click Me !</button>
        <span>{{message}}</span>
    `
})
export class LightswitchComponent {
    isOn = false;
    clicked() { this.isOn = !this.isOn; }
    get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
