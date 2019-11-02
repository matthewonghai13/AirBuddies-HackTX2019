declare module 'haversine-distance';

declare interface Aircraft {
  model: string;
  speed: number;
  passengerCapacity: {
    total: number;
    main: number;
    first: number;
  };
}

declare interface Airport {
  code: string; // Airport code, typically 3 characters
  city: string; // Airport city name
  location: Location;
}

declare interface Location {
  latitude: number;
  longitude: number;
}

declare interface FlightDuration {
  hours: number;
  minutes: number;
  locale: string;
}

declare interface Person{
  name: string;
  age: number;
  class: number;
  flight_number: number;
  family: boolean;
  seat_location: number;
  interests: boolean[];
}

declare interface Flight {
  flightNumber: string;
  aircraft: Aircraft;
  origin: Airport;
  destination: Airport;
  distance: number;
  duration: FlightDuration;
  people_on_flight: Person[];
}

declare interface FlightQueryParams {
  date: string;
  origin?: string;
  destination?: string;
}