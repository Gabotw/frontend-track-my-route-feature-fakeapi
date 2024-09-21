export class Promo {
    id: number;
    description: string;
    imageUrl: string;
    name: string;
    validUntil: Date;

    constructor() {
        this.id = 0;
        this.description = "";
        this.imageUrl = "";
        this.name = "";
        this.validUntil = new Date();
    }
}
