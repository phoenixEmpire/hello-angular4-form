import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Person, states, Address } from '../data-model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit, OnChanges {
  @Input()
  person: Person;

  personForm: FormGroup;
  nameChangeLog: string[] = [];
  states = states;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService
  ) {
    this.createForm();
    this.logNameChange();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  createForm() {
    this.personForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  rebuildForm() {
    this.personForm.reset({
      name: this.person.name
    });
    this.setAddress(this.person.addresses);
  }

  revert() {
    this.rebuildForm();
  }

  setAddress(addresses: Address[]) {
    const addressFormGroups = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFormGroups);
    this.personForm.setControl('secretLairs', addressFormArray);
  }

  get secretLairs(): FormArray {
    return <FormArray>this.personForm.get('secretLairs');
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  prepareSavePerson(): Person {
    const formModel = this.personForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    const savedPerson: Person = {
      id: this.person.id,
      name: <string>formModel.name,
      addresses: secretLairsDeepCopy
    };

    return savedPerson;
  }

  onSubmit() {
    this.personService.updatePerson(this.prepareSavePerson()).subscribe(
      person => this.person = person
    );
    this.rebuildForm();
  }

  logNameChange() {
    const nameControl: FormControl = <FormControl>this.personForm.get('name')
    nameControl.valueChanges.forEach(
      (val: string) => this.nameChangeLog.push(val)
    );
  }
}
