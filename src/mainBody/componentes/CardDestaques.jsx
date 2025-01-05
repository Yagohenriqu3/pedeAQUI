
import './CardDestaques.css'

export default function CardDestaques({titulo, valor, imagem}) {
  return (
    <div className='container--destaques'>
            <div className='cardDestaques--imagem'>
                <img src={imagem} alt="x-burguer" />
            </div>

            <div className='cardDestaques--descricao'>
                <h2>{titulo}</h2>
                <h3>R${valor}</h3>  
            </div>
            
        </div>
  )
}
