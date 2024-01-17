import "../styles/routes/HotelsView.scss";
import { useHotelsContext } from "../context/HotelsProvider";
import imageBanner from "../assets/bay-beach-hotel-swimming-pool-resort-lagoon-185213-wallhere.com.webp";
import {
  BannerHeader,
  CardFilter,
  HotelCard,
  Loader,
  ServicesHotel,
} from "../components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HotelModel } from "../types/HotelModel";

export const HotelsView = () => {
  const { hotels, services, getHotelsByDestiny } = useHotelsContext();
  const [hotelsFilter, setHotelsFilter] = useState<HotelModel[]>([]);
  const { destiny } = useParams();
  const optionCarousel = {
    items: 5,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    responsive: {
      1200: {
        items: 5,
      },
      1100: {
        items: 4,
      },
      1000: {
        items: 3,
      },
      800: {
        items: 2,
      },
      768: {
        items: 1,
      },
      520: {
        items: 5,
      },
      200: {
        items: 4,
      },
    },
  };

  useEffect(() => {
    if (destiny) getHotelsFilter();
  }, [destiny]);

  const getHotelsFilter = async () => {
    const hotels = await getHotelsByDestiny!(destiny!);
    setHotelsFilter(hotels);
  };

  return (
    <>
      <BannerHeader img={imageBanner} />
      <div className="container">
        <CardFilter />
      </div>
      <ServicesHotel
        services={services!}
        options={optionCarousel}
        titulo="Servicios de tu hotel favorito"
      />
      {hotels?.length === 0 ? (
        <Loader />
      ) : (
        <div className="container">
          {!destiny ? <h4>¿Estás buscando el lugar ideal para tu estadía?</h4> : <h4>¿Estás buscando el lugar ideal en {destiny}?</h4>}
          
          <div className="hotels">
            {!destiny
              ? hotels?.map((hotel) => {
                  return (
                    <div className="my-3" key={hotel.id}>
                      <HotelCard data={hotel} />
                    </div>
                  );
                })
              : hotelsFilter?.map((hotel) => {
                  return (
                    <div className="my-3" key={hotel.id}>
                      <HotelCard data={hotel} />
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </>
  );
};
