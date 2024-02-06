import {useState} from "react";
import Hashtaurante from "./assets/hashtaurante.webp"
import './App.css'
import { Navegacao } from './Navegacao.jsx';
import { ItemCardapio } from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas} from "./cardapio.js"

export function App() {
  const paginaMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, paginaReload] = useState(0);
  return<>
        <img src={Hashtaurante} alt="Hashtaurante" className="capa" />
        <Navegacao paginaReload={paginaReload}/>
        <div className="menu">
             {paginaMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
        </div>
        </>
}