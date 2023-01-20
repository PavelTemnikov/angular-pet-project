import { Component} from "@angular/core";

@Component({
    selector: 'banner',
    template: `
        <h1>{{title}}</h1>
        <p>Hello, I am banner</p>
    `,
    styles: ['h1 { color: green; font-szie: 350% }']
})
export class BannerComponent {
    title = 'My Super Title';
}