import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import MenuNavegacao from './mainBody/navegacao/MenuNavegacao'
import HomePage from './mainBody/HomePage'
import CarrinhoCompra from './carrinho/CarrinhoCompra'
import Mensagens from './mensagem/Mensagens'
import Favoritos from './favoritos/Favorito'
import Usuarios from './usuario/Usuarios'


export default function Rotas() {
  return (
    <div>
      <Router>

    <MenuNavegacao/>
        <Routes>
            <Route path="/" element={<HomePage/>} exact />
            <Route path="/carrinho" element={<CarrinhoCompra />} />
            <Route path="/mensagens" element={<Mensagens />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/usuario" element={<Usuarios />} />
            
        </Routes>

      </Router>

    </div>
  )
}
