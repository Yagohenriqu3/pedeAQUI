import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Ícone de marcador de mapa

const Endereco = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaMapMarkerAlt size={24} color="red" />
      <span>123 Main Street, Cityville</span>
    </div>
  );
};

export default Endereco

