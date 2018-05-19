import { Component, OnInit } from '@angular/core';
import { QuestionControlService } from '../question/question-control.service';
import { QuestionService } from '../question/question.service';
import { QuestionBase } from '../question/question-base';
import { FormGroup } from '@angular/forms';

@Component({
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService, QuestionService]
})
export class DynamicFormComponent implements OnInit {
    questions: QuestionBase<any>[];
    form: FormGroup;
    payLoad = '';

    constructor(private questionService: QuestionService, private questionCtrlService: QuestionControlService) { }

    ngOnInit() {
        this.questions = this.questionService.getQuestions();
        this.form = this.questionCtrlService.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
