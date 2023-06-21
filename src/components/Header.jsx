import React from 'react';

const Header = ({ changeShowModal }) => {
  const handleClick = () => {
    changeShowModal();
  };

  return (
    <header
      className="p-4 flex flex-wrap justify-between items-center"
      style={{
        background: 'linear-gradient(to top, #00FF00, #FFFF00)',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 className="text-2xl font-bold">Lista de Participantes</h1>
      <button onClick={handleClick} className="bg-primary text-white p-2">
        <i className="bx bx-plus"></i>Inscribir Nuevo Participante
      </button>
    </header>
  );
};

export default Header;
