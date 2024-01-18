export interface HotelModel {
    id: number;
    nombre: string;
    direccion: string;
    ubicacion: string;
    telefono: string;
    correoElectronico: string;
    imagenes: string[];
    habitaciones: Habitacion[];
    servicios: string[];
    calificaciones: Calificaciones;
}

export interface Calificaciones {
    puntuacion: number;
    comentarios: Comentario[];
}

export interface Comentario {
    usuario: string;
    comentario: string;
    fecha: string
}

export interface Habitacion {
    tipo: string;
    descripcion: string;
    costoBase: number;
    impuestos: number;
    disponibilidad: boolean;
    ultimaReserva: UltimaReserva;
    img: string;
}

export interface UltimaReserva {
    usuario: string;
    fechaEntrada: Date;
    fechaSalida: Date;
    numNoches: number;
}
