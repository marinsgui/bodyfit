import {
  RiMessage2Line,
  RiArrowLeftCircleFill,
  RiArrowRightCircleFill,
} from "react-icons/ri";

import girlBoxing from "../assets/girl-boxing.jpg";
import manGym from "../assets/man-gym.jpg";
import girlWorkingOut from "../assets/girl-working-out.jpg";

export default function Community() {
  const images = [
    {
      url: manGym,
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est accusamus aliquam saepe recusandae, nihil, libero quos!",
      name: "Jonathan S.",
    },
    {
      url: girlBoxing,
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae incidunt quasi tenetur dolore laboriosam minima.",
      name: "Alice G.",
    },
    {
      url: girlWorkingOut,
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non provident sit explicabo dolorum?",
      name: "Laura M.",
    },
  ];

  return (
    <section className="flex justify-between">
      <div className="relative flex flex-col items-center justify-between px-10">
        <h2 className="text-center text-6xl font-bold">
          <RiMessage2Line
            size={100}
            color="#1313160D"
            className="absolute -top-8 left-0"
          />
          Comunidade
        </h2>
        <div className="flex gap-7 self-start">
          <button>
            <RiArrowLeftCircleFill size={45} color="#13131634" />
          </button>
          <button>
            <RiArrowRightCircleFill size={45} />
          </button>
        </div>
      </div>

      <div className="flex gap-7">
        {images.map((image) => (
          <div className="relative flex items-center justify-center">
            <img
              src={image.url}
              alt={image.url}
              key={image.id}
              className="h-[450px] w-[380px] object-cover saturate-50"
            />
            <p className="absolute bottom-20 px-10 text-center text-lg font-light text-white">
              "{image.text}"
            </p>
            <p className="absolute bottom-10 text-xl font-bold text-white">
              <span className="text-red-500">~</span> {image.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
