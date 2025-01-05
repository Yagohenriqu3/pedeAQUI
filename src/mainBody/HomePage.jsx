import BannerHome from "./componentes/BannerHome"
import './HomePage.css'
import Promocao from "./Promocao"
import Destaques from './Destaques'
import Bebidas from './Bebidas'

function HomePage() {
   
    return (
        <div className="Container--HomePage">
            <BannerHome />
            <Promocao />
            <Destaques titulo="Destaques do Dia"/>
            <Bebidas/>
           
        </div>
    )
}

export default HomePage;
