// import { useEffect } from "react";
import { BannerHome } from "../components/BannerHome";
import { HotelsCarousel } from "../components/HotelsCarousel";
import { SearchFilters } from "../components/SearchFilters";
import "../styles/App.scss";

export const Home = () => {
//   useEffect(() => {
//     getCottages();
//     getRooms();
//   }, []);

//   const getCottages = () => {
//     fetch(`/api/cottage`)
//       .then((response) => response.json())
//       .then(({ cottages }) => {
//         console.log("🚀 ~ .then ~ cottages:", cottages);
//       });
//   };
//   const getRooms = () => {
//     fetch(`/api/room`)
//       .then((response) => response.json())
//       .then(({ rooms }) => {
//         console.log("🚀 ~ .then ~ rooms:", rooms);
//       });
//   };
//   const CreateRooms = () => {
//     fetch(`/api/room`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         type: "Familiar",
//       }),
//     });
//     getRooms()
//   };

//   const handleEvent = () => {
//     fetch("/api/cottage/1", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         owner: "Robinson Betancur",
//       }),
//     });
//     getCottages();
//   };

//   const handleCreate = () => {
//     fetch("/api/cottage/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "Viña del Mar",
//       }),
//     });
//     getCottages();
//   };

//   const handleDelete = () => {
//     fetch("/api/cottage/1", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     getCottages();
//   };

//   const handleRoomRead = () => {
//     fetch("/api/cottage/2/rooms")
//       .then((response) => response.json())
//       .then(({ rooms }) => {
//         console.log("🚀 ~ .then ~ rooms:", rooms);
//       });
//   };

  return (
    <>
      {/* <button onClick={handleEvent}>Actualizar</button>
      <button onClick={handleCreate}>Crear</button>
      <button onClick={handleDelete}>Eliminar</button>
      <button onClick={handleRoomRead}>Habitaciones</button>
      <button onClick={CreateRooms}>Crear room</button> */}
      <div className="container pb-5">
        <SearchFilters />
        <BannerHome />
        <HotelsCarousel />
      </div>
    </>
  );
};
