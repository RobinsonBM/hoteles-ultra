import { Model, belongsTo, createServer, hasMany } from "miragejs";

createServer({
  models: {
    hotel: Model,
    cottage: Model.extend({
      rooms: hasMany(),
    }),
    room: Model.extend({
      cottage: belongsTo(),
    }),
  },

  seeds(server) {
    let cartagoList = server.create("cottage", { name: "Cartago Salvaje" });
    let viñaList = server.create("cottage", { name: "Viña del Mar" });
    server.create("room", { type: "Chalet" });
    server.create("room", { cottage: cartagoList, type: "Doble" });
    server.create("room", { cottage: viñaList, type: "Triple" });
    server.create("hotel", {
      name: "Eco Hotel Terrabella",
      address: "Cra. 35 Este",
      destiny: "Medellin",
      telephone: "(604)4568798",
      email: "ecohotelterrabella@gmail.com",
      images: [
        "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/2c0b6683.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/b00a2214.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/22dbe1fa.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/7bc5015f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      ],
      rooms: [
        {
          type: "Doble",
          description: "Habitación doble superior",
          roomBaseCost: 476852,
          tax: 0.19,
          available: false,
          lastReservation: {
            user: "Kevin Garcia",
            startDate: "2024-01-10",
            endDate: "2024-01-15",
            nights: 5,
          },
          img: "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/8cffd51c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          type: "Chalet",
          description: "Chalet superior",
          roomBaseCost: 476852,
          tax: 0.19,
          available: true,
          lastReservation: {
            user: "Robinson Betancur Marin",
            startDate: "2024-01-20",
            endDate: "2024-01-25",
            nights: 5,
          },
          img: "https://images.trvl-media.com/lodging/90000000/89840000/89832800/89832727/d567df67.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
      services: ["Wifi gratuito", "Estacionamiento", "Piscina", "Gimnasio"],
      rates: {
        score: 4.5,
        comments: [
          {
            user: "Jhon Alexander Betancur Marin",
            comment:
              "¡Una estancia maravillosa! Personal amable y rooms limpias.",
            commentDate: "2023-05-29",
          },
          {
            user: "Maria Gladys Marin",
            comment: "Buen servicio, pero el desayuno podría mejorar.",
            commentDate: "2022-10-09",
          },
          {
            user: "Lina Maria Montaño",
            comment:
              "¡Una experiencia increíble! Las vistas desde el chalet eran impresionantes.",
            commentDate: "2022-05-17",
          },
        ],
      },
    });
    server.create("hotel", {
      name: "Mi Hotel Sandiego",
      address: "Calle 31, No. 43 - 90",
      destiny: "Bogota",
      telephone: "(604)6453738",
      email: "mihotelsandiego@gmail.com",
      images: [
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/5034da4a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/5d88b596.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/235143de.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/f87a98fc.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      ],
      rooms: [
        {
          type: "Doble Multiple",
          description: "Habitacion con 2 camas Dobles",
          roomBaseCost: 354500,
          tax: 0.19,
          available: true,
          lastReservation: {
            user: "Jhon Alexander Betancur Marin",
            startDate: "2024-01-20",
            endDate: "2024-01-25",
            nights: 5,
          },
          img: "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/dcdc353c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          type: "Confort",
          description: "Habitacion Confort Sencilla",
          roomBaseCost: 476852,
          tax: 0.19,
          available: true,
          lastReservation: {
            user: "Robinson Betancur Marin",
            startDate: "2024-01-20",
            endDate: "2024-01-25",
            nights: 5,
          },
          img: "https://images.trvl-media.com/lodging/4000000/3740000/3735000/3734977/a93ae195.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
      services: ["Wifi gratuito", "Estacionamiento", "Piscina", "Gimnasio"],
      rates: {
        score: 4.8,
        comments: [
          {
            user: "Simon Castaño",
            comment:
              "El personal fue muy atento, ¡definitivamente volveré en mi próximo viaje!",
            commentDate: "2023-01-29",
          },
          {
            user: "Felipe Correa",
            comment:
              "Buena relación calidad-precio. Habitación doble espaciosa y cómoda.",
            commentDate: "2023-12-24",
          },
        ],
      },
    });
    server.create("hotel", {
      name: "Hosteria Mar y Sol",
      address: "Km 17, Sector Bowie Bay Int 7, Punta Su",
      destiny: "San Andrés",
      telephone: "(608)4558767",
      email: "hosteriamarysol@gmail.com",
      images: [
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/2e09d362.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/e9c8d633.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/11cd9214.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/e5f231d7.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      ],
      rooms: [
        {
          type: "Doble",
          description: "Habitacion Doble",
          roomBaseCost: 165000,
          tax: 0.19,
          available: true,
          lastReservation: {
            user: "Roberto Uran Castillo",
            startDate: "2024-01-10",
            endDate: "2024-01-11",
            nights: 1,
          },
          img: "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/8073e5e1.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          type: "Cuadruple",
          description: "Habitacion Cuadruple",
          roomBaseCost: 275000,
          tax: 0.19,
          available: true,
          lastReservation: {
            user: "Robinson Betancur Marin",
            startDate: "2023-12-20",
            endDate: "2023-12-25",
            nights: 5,
          },
          img: "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/8fa386fe.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
        {
          type: "Familiar",
          description: "Habitacion Familiar",
          roomBaseCost: 360000,
          tax: 0.19,
          available: true,
          lastReservation: {
            user: "Bernardo Betancur Moncada",
            startDate: "2023-12-24",
            endDate: "2024-01-02",
            nights: 9,
          },
          img: "https://images.trvl-media.com/lodging/5000000/4680000/4672900/4672847/e52f0c54.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        },
      ],
      services: ["Estacionamiento", "Piscina", "TV", "Deck/Patio"],
      rates: {
        score: 4,
        comments: [
          {
            user: "Valeria Garrido",
            comment: "Experiencia maravillosa! Ambiente familiar y tranquilo.",
            commentDate: "2024-01-01",
          },
          {
            user: "Maria Soledad",
            comment:
              "El hotel es super recomendable. Es cómodo, limpio, buena atención, comida excelente y unos jardines hermosos.",
            commentDate: "2023-12-29",
          },
          {
            user: "Stiven Garrido",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cumque magnam iste, eveniet dolorem facilis.",
            commentDate: "2023-09-229",
          },
          {
            user: "Mariana Silva",
            comment:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae id esse autem, culpa qui assumenda porro rerum! Soluta, rem.",
            commentDate: "2023-05-29",
          },
        ],
      },
    });
  },

  routes() {
    this.namespace = "api";

    // COTTAGE

    this.get("/cottage", (schema) => {
      return schema.cottages.all();
    });
    this.get('/cottage/:id/rooms', (schema, {params}) => {
      let cottageId = params.id
      let cottage = schema.cottages.find(cottageId)
      return cottage.rooms
    })
    this.post("/cottage", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.cottages.create(attrs);
    });
    this.delete("/cottage/:id", (schema, { params }) => {
      const { id } = params;
      return schema.cottages.find(id).destroy();
    });

    this.put("/cottage/:id", (schema, { requestBody, params }) => {
      const attrs = JSON.parse(requestBody);
      const { id } = params;
      const cottage = schema.cottages.find(id);
      return cottage.update(attrs);
    });
    
    // ROOMS
    this.get("/room", (schema) => {
      return schema.rooms.all();
    });
    this.post("/room", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.rooms.create(attrs);
    });
    this.delete("/room/:id", (schema, { params }) => {
      const { id } = params;
      return schema.rooms.find(id).destroy();
    });

    this.put("/room/:id", (schema, { requestBody, params }) => {
      const attrs = JSON.parse(requestBody);
      const { id } = params;
      const cottage = schema.rooms.find(id);
      return cottage.update(attrs);
    });

    // --------------------------------------

    this.get("/hotels");
    this.get("/hotel/:id");
    this.get("/hotels/search/:destiny/", (schema, request) => {
      const { destiny } = request.params;
      const hotels = schema.hotels.where({ destiny }).models;
      return hotels;
    });

    this.post("/hotels", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.hotels.create(attrs);
    });
  },
});
