import React from "react";
import "./Usuarios.css";

export default function Usuarios() {
  const usuario = {
    nome: "Yago Oliveira",
    email: "yago.oliveira@email.com",
    telefone: "(11) 98765-4321",
  };

  const pedidos = [
    { id: 1, data: "2025-01-01", itens: ["Hambúrguer", "Batata Frita"], total: 35.0 },
    { id: 2, data: "2024-12-28", itens: ["Pizza", "Refrigerante"], total: 50.0 },
    { id: 3, data: "2024-12-25", itens: ["Sanduíche", "Suco"], total: 30.0 },
  ];

  return (
    <div className="usuarios-container">
      <h1>Dados do Usuário</h1>
      <div className="dados-usuario">
        <p><strong>Nome:</strong> {usuario.nome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Telefone:</strong> {usuario.telefone}</p>
      </div>

      <h2>Histórico de Pedidos</h2>
      <div className="pedidos-list">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="pedido-item">
            <span className="pedido-data"><strong>Data:</strong> {pedido.data}</span>
            <span className="pedido-itens"><strong>Itens:</strong> {pedido.itens.join(", ")}</span>
            <span className="pedido-total"><strong>Total:</strong> R$ {pedido.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
