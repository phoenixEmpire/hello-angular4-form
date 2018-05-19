import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { DropdownQuestion } from './question-dropdown';

@Injectable()
export class QuestionService {
    getQuestions() {
        const questions: QuestionBase<any>[] = [
            new TextboxQuestion({
                order: 1,
                label: 'First name',
                key: 'firstname',
                value: 'Bombasto',
                required: true
            }),
            new TextboxQuestion({
                order: 2,
                label: 'Email',
                key: 'emailAddress',
                value: 'email'
            }),
            new DropdownQuestion({
                order: 3,
                label: 'Bravery Rating',
                key: 'brave',
                options: [
                    {
                        key: 'solid',
                        value: 'Solid'
                    },
                    {
                        key: 'great',
                        value: 'Great'
                    },
                    {
                        key: 'good',
                        value: 'Good'
                    },
                    {
                        key: 'upproven',
                        value: 'Unproven'
                    }
                ]
            })
        ];
        return questions.sort((a, b) => a.order - b.order);
    }
}
