export class AddAnimal {
    static readonly type = '[Zoo] Add Animal';
    constructor(public name: string) {}
}

export class FeedAnimals {
    static readonly type = '[Zoo] Feed Animal';
}