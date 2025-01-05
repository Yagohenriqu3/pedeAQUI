import React, { useState } from "react";
import "./CarrinhoCompra.css";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState([
    { id: 1, nome: "Hambúrguer", quantidade: 2, preco: 15.0 },
    { id: 2, nome: "Batata Frita", quantidade: 1, preco: 8.0 },
    { id: 3, nome: "Refrigerante", quantidade: 3, preco: 5.0 },
  ]);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const calcularTotal = () => {
    return itensCarrinho.reduce((total, item) => total + item.quantidade * item.preco, 0).toFixed(2);
  };

  const removerItem = (id) => {
    setItensCarrinho(itensCarrinho.filter(item => item.id !== id));
  };

  const finalizarPedido = () => {
    setPedidoFinalizado(true);
  };

  return (
    <div className="carrinho-container">
      <h1>Carrinho de Compras</h1>
      {pedidoFinalizado ? (
        <div className="pedido-finalizado">
          <h2>Pedido Finalizado com Sucesso!</h2>
          <p>Obrigado pela sua compra. Em breve você receberá a confirmação do pedido.</p>
        </div>
      ) : (
        <>
          <div className="itens-carrinho">
            {itensCarrinho.map((item) => (
              <div key={item.id} className="item-carrinho">
                <span className="item-nome">{item.nome}</span>
                <span className="item-quantidade">Qtd: {item.quantidade}</span>
                <span className="item-preco">R$ {item.preco.toFixed(2)}</span>
                <button className="remover-item" onClick={() => removerItem(item.id)}>
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="total">
            <h2>Total: R$ {calcularTotal()}</h2>
            <button className="finalizar-pedido" onClick={finalizarPedido}>
              Finalizar Pedido
            </button>
          </div>
        </>
      )}
    </div>
  );
}
