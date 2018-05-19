export class QuestionBase<T> {
    order: number;
    label: string; // 标签名称
    controlType: string; // 控件类型
    key: string;
    value: T;
    required: boolean;

    constructor(options: {
        order?: number,
        label?: string,
        controlType?: string,
        key?: string,
        value?: T,
        required?: boolean
    } = {}) {
        this.order = options.order === undefined ? 1 : options.order;
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.key = options.key || '';
        this.value = options.value;
        this.required = !!options.required;
    }
}
