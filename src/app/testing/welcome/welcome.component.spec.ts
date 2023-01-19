import { TestBed } from "@angular/core/testing";
import { UserService } from "../model/user.service";
import { WelcomeComponent } from "./welcome.component";

class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User' };
}

describe('WelcomeComponent (class only)', () => {
    let comp: WelcomeComponent;
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WelcomeComponent,
                { provide: UserService, useClass: MockUserService }
            ]
        });

        comp = TestBed.inject(WelcomeComponent);
        userService = TestBed.inject(UserService);
    });
    
    it('should not have welcome message after construction', () => {
        expect(comp.welcome).toBe('');
    });

    it('should welcome logged in user after Angular calls ngOnInit', () => {
        comp.ngOnInit();
        expect(comp.welcome).toContain(userService.user.name);
    });

    it('should ask user to log in if not logged in after ngOnInit', () => {
        userService.isLoggedIn = false;
        comp.ngOnInit();
        expect(comp.welcome).not.toContain(userService.user.name);
        expect(comp.welcome).toMatch(/log in/i);
    });
});