import logo from "../../assets/Images/logo.png"
import search from "../../assets/Images/search.png"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import S from './header.module.scss'

export default function header() {
  return (
    <BrowserRouter>
    <header>
        <section className={S.boxLogo}>
            <img src={logo} alt="Logo do site" />
            <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Doados">Livros Doados</Link></li>
              <li><Link to="/QueroDoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input type="text" placeholder='O que você procura?'/>
          <img src={search} alt="Imagem de busca" />
        </div>
    </header>
    <Routes>
      <Route>
          <Route path='/'element={<Inicio/>}/>
          <Route path='/Doados'element={<Doados/>}/>
          <Route path='/QueroDoar'element={<QueroDoar/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
