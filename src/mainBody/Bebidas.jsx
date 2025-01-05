import CardDestaques from './componentes/CardDestaques';



import './componentes/CardDestaques.css';
import Cocacola from '../assets/cocacola.png'
import Guaracamp from '../assets/guaracamp.jpg'
import Guarana from '../assets/guarana.png'


export default function Destaques() {
  // Dados dos destaques
  const destaques = [
    { imagem: Cocacola, titulo: "Refrigerante", valor: "10,99" },
    { imagem: Guaracamp, titulo: "Refrigerante", valor: "10,99" },
    { imagem: Cocacola, titulo: "Refrigerante", valor: "10,99" },
    { imagem: Guaracamp, titulo: "Refrigerante", valor: "10,99" },
    { imagem: Cocacola, titulo: "Refrigerante", valor: "10,99" },
    { imagem: Guaracamp, titulo: "Refrigerante", valor: "10,99" },
    { imagem: Cocacola, titulo: "Refrigerante", valor: "10,99" }
  ];

  return (
    <div>
      <h2 className="Titulo--Destaques">Bebidas</h2>
      
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
