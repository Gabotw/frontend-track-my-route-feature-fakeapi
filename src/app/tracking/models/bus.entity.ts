import {BusStop} from "./bus-stop.entity";

export class Bus{
    id: number;
    bus_name: string;
    bus_stops: BusStop[];
    constructor() {
        this.id = 0;
        this.bus_name = "";
        this.bus_stops = [];
    }
}
