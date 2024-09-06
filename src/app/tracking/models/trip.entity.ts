export class Trip {
    id: number;
    start_date: Date;
    end_date: Date;

    constructor() {
        this.id = 0;
        this.start_date = new Date();
        this.end_date = new Date();
    }

}
