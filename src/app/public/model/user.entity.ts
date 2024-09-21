export class User{
    id: number;
    type: string;
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    bus_company: string;

    constructor() {
        this.id = 0;
        this.type = "";
        this.name = "";
        this.lastname = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.bus_company = "";
    }
}
