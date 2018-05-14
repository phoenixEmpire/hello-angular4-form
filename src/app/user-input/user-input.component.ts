import { Component } from '@angular/core';

@Component({
    templateUrl: './user-input.component.html'
})
export class UserInputComponent {

    values = '';
    heroes = ['Leo', 'Raph', 'Mikey', 'Don'];

    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }

    addHero(hero: string) {
        if (hero) {
            this.heroes.push(hero);
        }
    }
}
