import { Users2, ArrowRightCircle } from "lucide-react";

export default function About() {
  return (
    <section className="flex items-center justify-center py-32">
      <div className="relative flex h-1/3 w-2/5 flex-col gap-8">
        <Users2
          size={100}
          color="#1313160D"
          className="absolute -top-8 left-32"
        />
        <h2 className="z-10 text-center text-6xl font-bold">Nossa missão</h2>
        <p className="text-lg text-neutral-600">
          Aqui, estamos comprometidos em ajudá-lo a alcançar seus objetivos e a
          transformar sua vida por meio do poder do fitness e do bem-estar.
        </p>
        <p className="text-lg text-neutral-600">
          Nossa missão é inspirar, motivar e capacitar cada indivíduo a se
          tornar a melhor versão de si mesmo. Estamos aqui para guiá-lo em sua
          jornada rumo a uma vida mais saudável e ativa.
        </p>
        <button className="flex items-center gap-2 self-start font-bold">
          FAÇA SUA MATRÍCULA <ArrowRightCircle />
        </button>
      </div>
    </section>
  );
}
