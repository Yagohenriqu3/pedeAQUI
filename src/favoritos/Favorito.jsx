import React, { useState } from "react";
import "./Favorito.css";

export default function Favorito() {
  const [favoritos, setFavoritos] = useState([
    { id: 1, nome: "Hambúrguer", preco: 15.0, quantidade: 1 },
    { id: 2, nome: "Pizza", preco: 25.0, quantidade: 1 },
    { id: 3, nome: "Batata Frita", preco: 8.0, quantidade: 1 },
  ]);
  const [editando, setEditando] = useState(null);
  const [quantidade, setQuantidade] = useState(1);

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter(item => item.id !== id));
  };

  const editarPedido = (item) => {
    setEditando(item.id);
    setQuantidade(item.quantidade);
  };

  const confirmarEdicao = (id) => {
    setFavoritos(favoritos.map(item =>
      item.id === id ? { ...item, quantidade } : item
    ));
    setEditando(null);
  };

  const pedirNovamente = (item) => {
    setFavoritos([...favoritos, { ...item, id: Date.now(), quantidade }]);
  };

  return (
    <div className="favorito-container">
      <h1>Meus Favoritos</h1>
      {favoritos.length === 0 ? (
        <p className="vazio">Você não tem itens favoritos.</p>
      ) : (
        <div className="favoritos-list">
          {favoritos.map((item) => (
            <div key={item.id} className="favorito-item">
              <span className="favorito-nome">{item.nome}</span>
              <span className="favorito-preco">R$ {item.preco.toFixed(2)}</span>
              <span className="favorito-quantidade">Qtd: {item.quantidade}</span>
              <button className="remover-favorito" onClick={() => removerFavorito(item.id)}>
                Remover
              </button>
              <button className="editar-favorito" onClick={() => editarPedido(item)}>
                Editar Pedido
              </button>
              <button className="pedir-novamente" onClick={() => pedirNovamente(item)}>
                Pedir Novamente
              </button>
            </div>
          ))}
        </div>
      )}

      {editando && (
        <div className="editar-pedido">
          <h3>Editar Pedido</h3>
          <label>
            Quantidade:
            <input
              type="number"
              value={quantidade}
              min="1"
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </label>
          <button onClick={() => confirmarEdicao(editando)}>Confirmar Edição</button>
          <button onClick={() => setEditando(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}
