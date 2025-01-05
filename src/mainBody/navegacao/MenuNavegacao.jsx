import './MenuNavegacao.css'

import { FaComment, FaHeart ,FaHome, FaShoppingCart, FaUser  } from 'react-icons/fa';

import {Link} from 'react-router-dom'


export default function MenuNavegacao() {
  return (
    <div className='Container--MenuNavegacao'>
        <nav>
            <ul>
                <Link to='/mensagens'><li><FaComment title='Mensagens'/></li></Link>
                <li>|</li>
                <Link to='/favoritos'><li><FaHeart title='Favoritos'/></li></Link>
                <Link to='/'><li className='menunavegacao--home'><FaHome title='Início'/></li></Link>
                <Link to='/carrinho'><li><FaShoppingCart title='Pedidos'/></li></Link>
                <li>|</li>
                <Link to='/usuario'><li><FaUser title='Perfil'/></li></Link>
            </ul>
        </nav>
    </div>
  )
}
