import './CardPromocao.css'
import Hamburguer from '../../assets/bannerhome.png'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'




export default function CardPromocao({titulo, descricao, valor, imagem}) {

    const [ativo, setAtivo] = useState(false)

    const FavoritoCor ={
        color: ativo ?  'red' : 'rgb(253, 124, 124)' ,
    }



  return (
    <div className='container--cardPromocao'>
        <div className='cardPromocao--descricao'>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <h3>R${valor}<button style={FavoritoCor} onClick={() => setAtivo(!ativo)}><FaHeart title='Favoritar'/></button></h3>
            
        </div>

        <div className='cardPromocao--imagem'>
            <img src={imagem} alt="x-burguer" />
        </div>
    </div>
  )
}
