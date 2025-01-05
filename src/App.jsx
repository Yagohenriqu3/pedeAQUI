import './App.css'
import Header from './header/Header'
import Rodape from './footer/Rodape'



import Rotas from './Rotas'

function App() {
 

  return (
    <div className='global'>
      <header>
        <Header/>
      </header>
      <main>
        <Rotas/>
        
      </main>
     
      <footer>
        <Rodape/>
      </footer>
    </div>
  )
}

export default App
