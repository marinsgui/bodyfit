import { Users2, ArrowRightCircle } from 'lucide-react'

export default function About() {
    return (
        <section className="py-32 flex justify-center items-center">
            <div className="flex flex-col gap-8 w-2/5 h-1/3 relative">
                <Users2 size={100} color='#1313160D' className='absolute left-32 -top-8' />
                <h2 className="text-6xl font-bold text-center z-10">Nossa missão</h2>
                <p className="text-neutral-600 text-lg">Aqui, estamos comprometidos em ajudá-lo a alcançar seus objetivos e a transformar sua vida por meio do poder do fitness e do bem-estar.</p>
                <p className="text-neutral-600 text-lg">Nossa missão é inspirar, motivar e capacitar cada indivíduo a se tornar a melhor versão de si mesmo. Estamos aqui para guiá-lo em sua jornada rumo a uma vida mais saudável e ativa.</p>
                <button className='font-bold self-start flex gap-2 items-center'>FAÇA SUA MATRÍCULA <ArrowRightCircle /></button>
            </div>
        </section>
    )
}