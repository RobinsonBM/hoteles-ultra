import { Model, createServer } from "miragejs";

createServer({
  models: {
    hotel: Model,
  },

  seeds(server) {
    server.create("hotel", {
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
    server.create("hotel", {
      nombre: "Mi Hotel Sandiego",
      direccion: "Calle 31, No. 43 - 90",
      ubicacion: "Bogota",
      telefono: "(604)6453738",
      correoElectronico: "mihotelsandiego@gmail.com",
      imagenes: [
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/5034da4a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/5d88b596.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/235143de.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/f87a98fc.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      ],
      habitaciones: [
        {
          tipo: "Doble Multiple",
          descripcion: "Habitacion con 2 camas Dobles",
          costoBase: 354500,
          impuestos: 0.19,
          disponibilidad: true,
          ultimaReserva: {
            usuario: "Jhon Alexander Betancur Marin",
            fechaEntrada: "2024-01-20",
            fechaSalida: "2024-01-25",
            numNoches: 5,
          },
          img: "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/dcdc353c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          tipo: "Confort",
          descripcion: "Habitacion Confort Sencilla",
          costoBase: 476852,
          impuestos: 0.19,
          disponibilidad: true,
          ultimaReserva: {
            usuario: "Robinson Betancur Marin",
            fechaEntrada: "2024-01-20",
            fechaSalida: "2024-01-25",
            numNoches: 5,
          },
          img: "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/a93ae195.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
      servicios: ["Wifi gratuito", "Estacionamiento", "Piscina", "Gimnasio"],
      calificaciones: {
        puntuacion: 4.8,
        comentarios: [
          {
            usuario: "Simon Castaño",
            comentario:
              "El personal fue muy atento, ¡definitivamente volveré en mi próximo viaje!",
            fecha: "2023-01-29",
          },
          {
            usuario: "Felipe Correa",
            comentario:
              "Buena relación calidad-precio. Habitación doble espaciosa y cómoda.",
            fecha: "2023-12-24",
          },
        ],
      },
    });
    server.create("hotel", {
      nombre: "Hosteria Mar y Sol",
      direccion: "Km 17, Sector Bowie Bay Int 7, Punta Su",
      ubicacion: "San Andrés",
      telefono: "(608)4558767",
      correoElectronico: "hosteriamarysol@gmail.com",
      imagenes: [
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/2e09d362.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/e9c8d633.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/11cd9214.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/e5f231d7.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      ],
      habitaciones: [
        {
          tipo: "Doble",
          descripcion: "Habitacion Doble",
          costoBase: 165000,
          impuestos: 0.19,
          disponibilidad: true,
          ultimaReserva: {
            usuario: "Roberto Uran Castillo",
            fechaEntrada: "2024-01-10",
            fechaSalida: "2024-01-11",
            numNoches: 1,
          },
          img: "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/8073e5e1.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          tipo: "Cuadruple",
          descripcion: "Habitacion Cuadruple",
          costoBase: 275000,
          impuestos: 0.19,
          disponibilidad: true,
          ultimaReserva: {
            usuario: "Robinson Betancur Marin",
            fechaEntrada: "2023-12-20",
            fechaSalida: "2023-12-25",
            numNoches: 5,
          },
          img: "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/8fa386fe.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          tipo: "Familiar",
          descripcion: "Habitacion Familiar",
          costoBase: 360000,
          impuestos: 0.19,
          disponibilidad: true,
          ultimaReserva: {
            usuario: "Bernardo Betancur Moncada",
            fechaEntrada: "2023-12-24",
            fechaSalida: "2024-01-02",
            numNoches: 9,
          },
          img: "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/e52f0c54.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
      servicios: ["Estacionamiento", "Piscina", "TV", "Deck/Patio"],
      calificaciones: {
        puntuacion: 4,
        comentarios: [
          {
            usuario: "Valeria Garrido",
            comentario:
              "Experiencia maravillosa! Ambiente familiar y tranquilo.",
            fecha: "2024-01-01",
          },
          {
            usuario: "Maria Soledad",
            comentario:
              "El hotel es super recomendable. Es cómodo, limpio, buena atención, comida excelente y unos jardines hermosos.",
            fecha: "2023-12-29",
          },
          {
            usuario: "Stiven Garrido",
            comentario:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque magnam iste, eveniet dolorem facilis.",
            fecha: "2023-09-229",
          },
          {
            usuario: "Mariana Silva",
            comentario:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae id esse autem, culpa qui assumenda porro rerum! Soluta, rem.",
            fecha: "2023-05-29",
          },
        ],
      },
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/hotels", (schema) => {
      return schema.hotels.all();
    });

    this.get("/hotel/:id", (schema, request) => {
      console.log("🚀 ~ this.get ~ request.params:", request);
      let { id } = request.params;
      return schema.hotels.find(id);
    });

    this.get("/hotels/:destiny", (schema, request) => {
      let { destiny } = request.params;
      const hotels = schema.hotels.where({ ubicacion: destiny }).models;
      return hotels;
    });

    this.post("/hotels", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.hotels.create(attrs);
    });
  },
});

// // mirage/config.js
// import { createServer, Model } from 'miragejs';
// import userFactory from './factories/user';

// createServer({
//     models: {
//         user: Model,
//     },

//     factories: {
//         user: userFactory,
//     },

//     seeds(server) {
//         server.createList('user', 10);
//     },

//     routes() {
//         this.namespace = '/api';

//         this.get('/users', (schema) => {
//             return schema.users.all();
//         });

//         this.get('/users/:id', (schema, request) => {
//             const userId = request.params.id;
//             return schema.users.find(userId);
//         });

//         this.post('/users', (schema, request) => {
//             const attrs = JSON.parse(request.requestBody);
//             return schema.users.create(attrs);
//         });

//         this.put('/users/:id', (schema, request) => {
//             const userId = request.params.id;
//             const newAttrs = JSON.parse(request.requestBody);
//             const user = schema.users.find(userId);
//             user.update(newAttrs);
//             return user;
//         });
//     },
// });
