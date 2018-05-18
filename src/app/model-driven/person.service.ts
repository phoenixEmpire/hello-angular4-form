import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person, persons } from './data-model';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class PersonService {
    private delayMs = 500;

    getPersons(): Observable<Person[]> {
        return of(persons).pipe(delay(this.delayMs));
    }

    updatePerson(person: Person): Observable<Person> {
        const oldPerson = persons.find(p => person.id === p.id);
        const newPerson = Object.assign(oldPerson, person);
        return of(newPerson).pipe(delay(this.delayMs));
    }
}
