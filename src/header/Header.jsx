import Endereco from "./componentes/Endereco"
import IconeUsuario from "./componentes/IconeUsuario"
import Menu from "./componentes/Menu"
import "./Header.css"

function Header (){
    return(
        <div className="container--header">
            <Menu/>
            <Endereco/>
            <IconeUsuario/>



        </div>
    )
}

export default Header
