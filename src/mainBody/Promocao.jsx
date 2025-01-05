import CardPromocao from "./componentes/CardPromocao"

import Hambuerguermexicano from '../assets/hamburguer-mexicano.jpg'
import Cocacola from '../assets/cocacola.png'
import CachorroQuente from '../assets/cachorro-quente.jpg'
import Pizza from '../assets/pizza.jpg'

export default function Promocao() {

    const Titulo ={
        fontSize: '1.5em',
        margin: '1em 0 0.5em 0'
    }


  return (
    <div className="Container--Promocao"> {/* Promoções */}
    <h1 style={Titulo}>Promoções do dia</h1>
        <CardPromocao
          titulo='Pizza de calabresa'
          imagem={Pizza}
          descricao="tamanho: 70cm"
          valor=" 89,90"


        /> 
        <CardPromocao
          titulo='Cachorro Quente'
          imagem={CachorroQuente}
          descricao="de linguiça"
          valor=" 14,90"
        />
        <CardPromocao
          titulo='Coca Cola'
          imagem={Cocacola}
          descricao="600ml"
          valor=" 11,99"
        />
</div>
  )
}
