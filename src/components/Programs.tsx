import { Element } from "react-scroll";

import { Calendar } from "lucide-react";

import boxing from "../assets/boxing.png";
import yoga from "../assets/yoga.png";
import pump from "../assets/pump.png";

export default function Programs() {
  const images = [
    {
      url: boxing,
      title: "Boxe",
      id: 1,
    },
    {
      url: pump,
      title: "Musculação",
      id: 2,
    },
    {
      url: yoga,
      title: "Yoga",
      id: 2,
    },
  ];

  return (
    <Element name="Exercicios">
      <div
        className="relative h-1/3"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Calendar
          size={100}
          color="#1313160D"
          className="absolute -top-8 left-[560px]"
        />
        <h2 className="z-10 text-center text-6xl font-bold">
          Modalidades oferecidas
        </h2>
        <div className="flex justify-center gap-8 py-8 transition-all duration-500 ease-in-out">
          {images.map((image) => (
            <div className="relative">
              <img src={image.url} alt="Image" className="h-96 w-96" />
              <p className="absolute bottom-4 left-4 bg-white p-2 font-bold">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
