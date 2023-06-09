import { FaCheckCircle } from "react-icons/fa";
import { Tag } from "lucide-react";

import { Element } from "react-scroll";

export default function Pricing() {
  const basicItems = [
    {
      id: 1,
      text: "acesso ilimitado à academia",
    },
    {
      id: 2,
      text: "1 modalidade",
    },
    {
      id: 3,
      text: "avaliações gratuitas",
    },
  ];

  const premiumItems = [
    {
      id: 1,
      text: "acesso ilimitado à academia",
    },
    {
      id: 2,
      text: "3 modalidades",
    },
    {
      id: 3,
      text: "avaliações gratuitas",
    },
    {
      id: 4,
      text: "personal trainer",
    },
  ];

  const eliteItems = [
    {
      id: 1,
      text: "acesso ilimitado à academia",
    },
    {
      id: 2,
      text: "3 modalidades",
    },
    {
      id: 3,
      text: "avaliações gratuitas",
    },
    {
      id: 4,
      text: "personal trainer",
    },
    {
      id: 5,
      text: "50% de desconto em suplementos",
    },
  ];

  return (
    <Element name="Preços" className="relative mt-24 flex flex-col items-center justify-center">
      <Tag
        size={100}
        color="#1313160D"
        className="absolute -top-5 left-[690px]"
      />
      <h2 className="text-center text-6xl font-bold">Planos e preços</h2>

      <div
        className="flex items-center justify-center gap-8 py-16"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="flex h-[500px] w-[350px] flex-col items-center justify-center gap-5 bg-gray-200">
          <h3 className="bg-black px-2 py-1 font-semibold text-white">
            Básico
          </h3>
          <div>
            <p className="text-center text-4xl font-bold">R$ 69</p>
            <p className="text-center font-medium text-gray-700">/mês</p>
          </div>
          <ul>
            {basicItems.map((item) => (
              <li className="flex items-center gap-1 py-1">
                <FaCheckCircle size={15} className="inline" />
                {item.text}
              </li>
            ))}
          </ul>
          <button className="border border-black p-4 font-bold">
            FAÇA A SUA MATRÍCULA
          </button>
        </div>

        <div className="flex h-[550px] w-[380px] flex-col items-center justify-center gap-5 bg-neutral-900 text-white">
          <h3 className="bg-white px-2 py-1 font-semibold text-black">
            Premium
          </h3>
          <div>
            <p className="text-center text-4xl font-bold">R$ 89</p>
            <p className="text-center font-medium text-gray-300">/mês</p>
          </div>
          <ul>
            {premiumItems.map((item) => (
              <li className="flex items-center gap-1 py-1">
                <FaCheckCircle size={15} className="inline" />
                {item.text}
              </li>
            ))}
          </ul>
          <button className="bg-white p-4 font-bold text-black">
            FAÇA A SUA MATRÍCULA
          </button>
        </div>

        <div className="flex h-[500px] w-[350px] flex-col items-center justify-center gap-5 bg-gray-200">
          <h3 className="bg-black px-3 py-1 font-semibold text-white">Elite</h3>
          <div>
            <p className="text-center text-4xl font-bold">R$ 99</p>
            <p className="text-center font-medium text-gray-700">/mês</p>
          </div>
          <ul>
            {eliteItems.map((item) => (
              <li className="flex items-center gap-1 py-1">
                <FaCheckCircle size={15} className="inline" />
                {item.text}
              </li>
            ))}
          </ul>
          <button className="border border-black p-4 font-bold">
            FAÇA A SUA MATRÍCULA
          </button>
        </div>
      </div>
    </Element>
  );
}
