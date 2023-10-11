export class FlightModel{
    flightNumber: number = 0;
    flightName: string = '';
    origin: string = '';
    destination: string = '';
    departureDate: Date = new Date();
    departureTime: Date=new Date();
    arrivalDate:Date=new Date();
    arrivalTime:Date=new Date();
    price: number=0
    seat:number=0
}