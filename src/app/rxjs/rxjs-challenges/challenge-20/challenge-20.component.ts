import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-challenge-twenty',
    template: `
        <blockquote>
            Create a classic Material ripple effect on click
        </blockquote>
        <p ripple class="container">
            Ripple me
        </p>
    `,
    styles: [
        `@keyframes rippleOn {
            from {
            transform: scale(0);
            }
        
            to {
            transform: none;
            }
        }
        
        @keyframes rippleOff {
            from {
            transform: none;
            }
        
            to {
            transform: none;
            opacity: 0;
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 100%;
            background: currentColor;
            opacity: 0.12;
            pointer-events: none;
            animation-duration: 450ms;
            animation-name: rippleOn;
        }
        
        .container {
            position: relative;
            overflow: hidden;
            height: 200px;
            background: whitesmoke;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            user-select: none;
            color: blueviolet;
            font-weight: bold;
            text-transform: uppercase;
            border: 1px solid rgba(0, 0, 0, 0.1);
        }`   
    ],
    encapsulation: ViewEncapsulation.None
})
export class Challenge20Component {

}
