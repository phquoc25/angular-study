export class Hero {
    constructor(private _id: number, private _name: string) {}
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}
