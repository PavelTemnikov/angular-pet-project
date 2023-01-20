import { Component } from "@angular/core";
import { Hero } from "../model/hero";

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2><span>{{hero.name | titlecase}}</span> Details</h2>
            <div><span>id: </span>{{hero.id}}</div>
            <div>
                <label for="name">name: </label>
                <input id="name" [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `,
    styles: [`
        label {
            display: inline-block;
            width: 3em;
            margin: .5em 0;
            color: #607D8B;
            font-weight: bold;
        }
        input {
            height: 2em;
            font-size: 1em;
            padding-left: .4em;
        }
        button {
            margin-top: 20px;
            font-family: Arial, sans-serif;
            background-color: #eee;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #cfd8dc;
        }
        button:disabled {
            background-color: #eee;
            color: #ccc;
            cursor: auto;
        }
    `]
})
export class HeroDetailComponent {
    hero: Hero = { id: 1, name: '' };
}
