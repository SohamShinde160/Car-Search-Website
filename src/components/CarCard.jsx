/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { GiCartwheel } from "react-icons/gi";

const CarCard = ({ car }) => {
  return (
    <main className="w-full h-[460px] bg-[#3B4053] flex flex-col gap-4 rounded-xl shadow-lg p-4">
      <section className="w-full h-64">
        <LazyLoadImage
          alt={car.title}
          effect="blur"
          src={car.img}
          className="w-full h-64 object-cover rounded-xl"
        />
      </section>
      <article className="w-full flex flex-col gap-5">
        <section className="w-full flex justify-between">
          <h1 className="text-white text-lg">{car.title}</h1>
          <p className=" bg-orange-400 rounded-lg px-1">
            {car.year}
          </p>
        </section>
        <section className="grid grid-cols-2 gap-2">
          <p className="flex items-center gap-1">
            <GoPeople className="text-orange-400" />
            <span className="text-white text-sm">{car.capacity} People</span>
          </p>
          <p className="flex items-center gap-1">
            <LuFuel className="text-orange-400" />
            <span className="text-white text-sm">{car.fuel}</span>
          </p>
          <p className="flex items-center gap-1">
            <IoMdSpeedometer className="text-orange-400" />{" "}
            <span className="text-white text-sm">{car.engine}</span>
          </p>
          <p className="flex items-center gap-1">
            {" "}
            <GiCartwheel className="text-orange-400" />
            <span className="text-white text-sm">{car.transmission}</span>
          </p>
        </section>
        <section className="flex justify-between items-center">
          <p className="text-white font-normal">{car.price}</p>
          <button className="bg-orange-400 px-3 py-2 text-white rounded-lg text-sm font-bold hover:bg-sky-500 transition-all duration-300 ease-in-out">
            Buy Now
          </button>
        </section>
      </article>
    </main>
  );
};

export default CarCard;
