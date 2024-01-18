export interface HotelModel {
    id: number;
    name: string;
    address: string;
    destiny: string;
    telephone: string;
    email: string;
    images: string[];
    rooms: Room[];
    services: string[];
    rates: Rates;
}

export interface Rates {
    score: number;
    comments: Comment[];
}

export interface Comment {
    user: string;
    comment: string;
    commentDate: string
}

export interface Room {
    type: string;
    description: string;
    roomBaseCost: number;
    tax: number;
    available: boolean;
    lastReservation: LastReservation;
    img: string;
}

export interface LastReservation {
    user: string;
    startDate: Date;
    endDate: Date;
    nights: number;
}
