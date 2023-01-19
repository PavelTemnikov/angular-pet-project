import { Component, EventEmitter, Input, Output } from "@angular/core"
import { Hero } from "../model/hero"

@Component({
    selector: 'dashboard-hero',
    template: `
        <button type="button" (click)="click()">{{hero.name | uppercase}}</button>
    `
})
export class DashboardHeroComponent {
    @Input() hero!: Hero;
    @Output() selected = new EventEmitter<Hero>();
    
    click() {
        this.selected.emit(this.hero);
    }
}