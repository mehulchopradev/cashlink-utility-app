export class Todo {
    /* private _title: string;
    done: boolean;
    createdDate: Date;

    constructor(title: string, done: boolean, createdDate: Date) {
        this.title = title;
        this.done = done;
        this.createdDate = createdDate;
    } */

    constructor(private _title: string, public done: boolean, public createdDate: Date=new Date()) {}

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }
}