import React, { useState } from "react";
import "./Mensagens.css";

export default function Mensagens() {
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: "Olá! Como posso ajudar você?", enviadaPor: "Sistema", horario: "10:30" },
    { id: 2, texto: "Gostaria de saber mais sobre os produtos.", enviadaPor: "Usuário", horario: "10:32" },
  ]);
  const [novaMensagem, setNovaMensagem] = useState("");

  const enviarMensagem = () => {
    if (novaMensagem.trim() !== "") {
      const nova = {
        id: mensagens.length + 1,
        texto: novaMensagem,
        enviadaPor: "Usuário",
        horario: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMensagens([...mensagens, nova]);
      setNovaMensagem("");
    }
  };

  return (
    <div className="mensagens-container">
      <h1>Mensagens</h1>
      <div className="mensagens-list">
        {mensagens.map((mensagem) => (
          <div
            key={mensagem.id}
            className={`mensagem-item ${
              mensagem.enviadaPor === "Usuário" ? "usuario" : "sistema"
            }`}
          >
            <p className="mensagem-texto">{mensagem.texto}</p>
            <span className="mensagem-info">
              {mensagem.enviadaPor} - {mensagem.horario}
            </span>
          </div>
        ))}
      </div>
      <div className="mensagem-input">
        <input
          type="text"
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
}
