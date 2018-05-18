import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Person } from '../data-model';
import { PersonService } from '../person.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  isLoading = false;
  persons: Observable<Person[]>;
  selectedPerson: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.isLoading = true;
    this.persons = this.personService.getPersons().pipe(
      finalize(() => this.isLoading = false)
    );
    this.selectedPerson = null;
  }

  select(person: Person) {
    this.selectedPerson = person;
  }
}
