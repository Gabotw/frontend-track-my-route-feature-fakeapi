export class Promo {
    id: number;
    img_url: string;
    title: string;
    valid_date: string;
    benefit: string;

    constructor() {
        this.id = 0;
        this.title = "";
        this.img_url = "";
        this.valid_date = "";
        this.benefit = "";
    }
}
