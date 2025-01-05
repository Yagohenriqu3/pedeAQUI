import CardDestaques from './componentes/CardDestaques';
import './componentes/CardDestaques.css';
import Hamburguer from '../assets/bannerhome.png'
import Hambuerguermexicano from '../assets/hamburguer-mexicano.jpg'

import CachorroQuente from '../assets/cachorro-quente.jpg'
import Pizza from '../assets/pizza.jpg'



export default function Destaques() {
  // Dados dos destaques
  const destaques = [
    { imagem: Hambuerguermexicano, titulo: "X-Burguer", valor: "10,99" },
    { imagem: CachorroQuente, titulo: "X-Salada", valor: "10,99" },
    { imagem: Pizza, titulo: "X-Bacon", valor: "10,99" },
    { imagem: Hambuerguermexicano, titulo: "X-Burguer", valor: "10,99" },
    { imagem: CachorroQuente, titulo: "X-Salada", valor: "10,99" },
    { imagem: Pizza, titulo: "X-Bacon", valor: "10,99" }
  ];

  return (
    <div>
      <h2 className="Titulo--Destaques">Destaques</h2>
      
      <div className="Container--DestaquesPage">
        {destaques.map((item, index) => (
          <CardDestaques
            key={index}
            imagem={item.imagem}
            titulo={item.titulo}
            valor={item.valor}
          />
        ))}
      </div>
    </div>
  );
}
