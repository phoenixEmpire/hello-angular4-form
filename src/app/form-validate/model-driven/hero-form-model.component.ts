import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name.directive';

@Component({
    templateUrl: './hero-form-model.component.html'
})
export class HeroFormModelComponent implements OnInit {
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
    heroForm: FormGroup;

    ngOnInit() {
        this.heroForm = new FormGroup({
            'name': new FormControl(this.hero.name, [
                Validators.required,
                Validators.minLength(4),
                forbiddenNameValidator(/bob/i)
            ]),
            'alterEgo': new FormControl(this.hero.alterEgo),
            'power': new FormControl(this.hero.power, Validators.required)
        });
    }

    get name(): AbstractControl {
        return this.heroForm.get('name');
    }

    get power(): AbstractControl {
        return this.heroForm.get('power');
    }
}
