import {BusStop} from "./bus-stop.entity";

export class Bus{
    id: number;
    bus: {
        busName: String,
        fullBusName: String,
    };
    origin:{
        originStop: String,
        originLatitude: String,
        originLongitude:String,
        fullOriginCoordinate: String
    };

    destination: {
        destinationStop: String,
        destinationLatitude: String,
        destinationLongitude: String,
        fullDestinationCoordinate: String,
    }

    constructor() {
        this.id = 0;
        this.bus = {
            busName : "",
            fullBusName : ""
        };
        this.origin = {
            originStop: "",
            originLatitude: "",
            originLongitude: "",
            fullOriginCoordinate: ""
        };

        this.destination = {
            destinationStop:"",
            destinationLatitude: "",
            destinationLongitude: "",
            fullDestinationCoordinate: ""
        }
    }
}
