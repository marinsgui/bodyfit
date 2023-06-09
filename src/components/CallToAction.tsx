export default function CallToAction() {
  return (
    <section
      className="flex h-[600px] items-center justify-center bg-neutral-900"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="relative">
        <div className='absolute -left-96 -top-96 h-[650px] w-[500px] bg-[url("./assets/footer-img.jpg")] bg-cover bg-no-repeat'></div>
        <div className="absolute -top-44 left-10 flex w-96 flex-col items-start gap-5 text-white">
          <h2 className="text-6xl font-bold">Se interessou?</h2>
          <p className="text-lg">
            Vamos te manter atualizado em tudo que você precisar saber sobre a
            Bodyfit. Nada mais, nada menos.
          </p>
          <button className="bg-white p-4 font-semibold text-black hover:brightness-90">
            FAÇA SUA MATRÍCULA
          </button>
        </div>
      </div>
    </section>
  );
}
