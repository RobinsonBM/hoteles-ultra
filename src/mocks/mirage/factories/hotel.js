// mirage/factories/hotel.js
import { Factory } from 'miragejs';

export default Factory.extend({
    nombre: "Eco Hotel Terrabella",
    direccion: "Cra. 35 Este",
    ubicacion: "Medellin",
    telefono: "(604)4568798",
    correoElectronico: "ecohotelterrabella@gmail.com",
    imagenes: [
      "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/2c0b6683.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/b00a2214.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/22dbe1fa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/7bc5015f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
    habitaciones: [
      {
        tipo: "Doble",
        descripcion: "Habitación doble superior",
        costoBase: 476852,
        impuestos: 0.19,
        disponibilidad: false,
        ultimaReserva: {
          usuario: "Kevin Garcia",
          fechaEntrada: "2024-01-10",
          fechaSalida: "2024-01-15",
          numNoches: 5,
        },
        img: "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/8cffd51c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      },
      {
        tipo: "Chalet",
        descripcion: "Chalet superior",
        costoBase: 476852,
        impuestos: 0.19,
        disponibilidad: true,
        ultimaReserva: {
          usuario: "Robinson Betancur Marin",
          fechaEntrada: "2024-01-20",
          fechaSalida: "2024-01-25",
          numNoches: 5,
        },
        img: "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/d567df67.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
      },
    ],
    servicios: ["Wifi gratuito", "Estacionamiento", "Piscina", "Gimnasio"],
    calificaciones: {
      puntuacion: 4.5,
      comentarios: [
        {
          usuario: "Jhon Alexander Betancur Marin",
          comentario:
            "¡Una estancia maravillosa! Personal amable y habitaciones limpias.",
          fecha: "2023-05-29",
        },
        {
          usuario: "Maria Gladys Marin",
          comentario: "Buen servicio, pero el desayuno podría mejorar.",
          fecha: "2022-10-09",
        },
        {
          usuario: "Lina Maria Montaño",
          comentario:
            "¡Una experiencia increíble! Las vistas desde el chalet eran impresionantes.",
          fecha: "2022-05-17",
        },
      ],
    },
  });
