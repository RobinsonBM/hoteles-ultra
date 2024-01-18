import { Model } from "miragejs";

export default Model.extend({
  nombre: "",
  direccion: "",
  ubicacion: "",
  telefono: "",
  correoElectronico: "",
  imagenes: [],
  habitaciones: [
    {
      tipo: "",
      descripcion: "",
      costoBase: 0,
      impuestos: 0,
      disponibilidad: true,
      ultimaReserva: {},
      img: "",
    },
  ],
  servicios: [],
  calificaciones: {
    puntuacion: 0,
    comentarios: [
      {
        usuario: "",
        comentario: "",
        fecha: "",
      },
    ],
  },
});
