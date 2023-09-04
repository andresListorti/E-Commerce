
import { Link } from 'react-router-dom'
import LogoImg from '../img/iconoA.jpg'

export default function Header() {
  return (
    <header className='header'>
        
        <Link to={"/"} className='icon'> <img src={LogoImg} alt=''/> </Link>
        <nav>
        <Link to={"/"}> Productos </Link>
        <Link to={"/"}> Favoritos </Link>
          
        </nav>
    </header>
  )
}
