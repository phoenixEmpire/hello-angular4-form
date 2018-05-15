export class Hero {
    /**
     * Creates an instance of Hero.
     * @param {number} id
     * @param {string} name
     * @param {string} power
     * @param {string} [alterEgo]
     * @memberof Hero
     */
    constructor(
        private id: number,
        private name: string,
        private power: string,
        private alterEgo?: string
    ) { }
}
