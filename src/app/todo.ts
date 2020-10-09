export class Todo {
    /* title: string;
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
        // encapsulation checks
        this._title = title;
    }
}