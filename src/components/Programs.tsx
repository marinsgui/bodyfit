import { Calendar } from 'lucide-react'

import boxing from '../assets/boxing.png'
import yoga from '../assets/yoga.png'
import pump from '../assets/pump.png'

export default function Programs() {

    const images = [
        {
            url: boxing,
            title: 'Boxe',
            id: 1,
        },
        {
            url: pump,
            title: 'Musculação',
            id: 2,
        },
        {
            url: yoga,
            title: 'Yoga',
            id: 2,
        },
    ]

    return (
        <section>
            <div className='relative h-1/3'>
                <Calendar size={100} color='#1313160D' className='absolute left-[560px] -top-8' />
                <h2 className="text-6xl font-bold text-center z-10">Modalidades oferecidas</h2>
                <div className='flex justify-center gap-8 transition-all ease-in-out duration-500 py-8'>
                    {images.map(image => (
                        <div className='relative'>
                            <img src={image.url} alt="Image" className='w-96 h-96' />
                            <p className='bg-white p-2 absolute bottom-4 left-4 font-bold'>{image.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}