import logo from '../assets/bodyfit-logo.svg'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className="flex justify-around items-center py-5 px-10 text-white">
            <img src={logo} alt="BodyFit logo" className='w-24' />

            <Navbar />

            <div className='flex gap-10'>
                <button className='font-bold'>ENTRAR</button>
                <button className='bg-green-400 p-3 font-bold'>CRIAR CONTA</button>
            </div>
        </header>
    )
}