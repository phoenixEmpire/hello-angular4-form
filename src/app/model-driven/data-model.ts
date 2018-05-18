export class Person {
    id = 0;
    name = '';
    addresses: Address[];
}

export class Address {
    state = '';
    city = '';
    street = '';
    zip = '';
}

export const persons: Person[] = [
    {
        id: 1,
        name: 'Whirlwind',
        addresses: [
            {
                state: 'CA',
                city: 'Anywhere',
                street: '123 Main',
                zip: '94801'
            },
            {
                state: 'CA',
                city: 'Somewhere',
                street: '456 Maple',
                zip: '23226'
            }
        ]
    },
    {
        id: 2,
        name: 'Bombastic',
        addresses: [
            {
                state: 'OH',
                city: 'Smallville',
                street: '789 Elm',
                zip: '04501'
            }
        ]
    },
    {
        id: 3,
        name: 'Magneta',
        addresses: []
    }
];

export const states = ['CA', 'MD', 'OH', 'VA'];
