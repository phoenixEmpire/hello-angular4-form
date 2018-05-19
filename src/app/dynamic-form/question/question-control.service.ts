import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

// 通过问题列表，创建表单 ( FormGroup )
@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<any>[]) {
        const group: any = {};
        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || null);

        });
        return new FormGroup(group);
    }
}
