import { Element } from 'react-scroll'

export default function HeroSection() {
  return (
    <Element name='Inicial' className="h-screen bg-neutral-900">
      <div
        className="relative mx-auto flex h-full w-2/3 items-center -space-x-48"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="z-10 flex-1 text-white">
          <h1 className="mb-8 text-7xl font-bold text-white">
            Não deixe para depois, <br /> comece a cuidar de você{" "}
            <span className="text-red-500">agora!</span>
          </h1>
          <p className="mb-8 max-w-md text-2xl font-light">
            Venha conhecer nossa academia e descubra como alcançar seus
            objetivos de saúde e boa forma.
          </p>
          <button className="bg-white p-4 font-semibold text-black hover:brightness-90">
            FAÇA SUA MATRÍCULA
          </button>
        </div>
        <div
          className={`h-full w-full flex-1 bg-[url('./assets/girl-gym.jpg')] bg-cover bg-right bg-no-repeat`}
        ></div>
      </div>
    </Element>
  );
}
