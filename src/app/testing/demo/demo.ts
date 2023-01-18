import { Injectable } from "@angular/core";
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