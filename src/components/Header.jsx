import React from 'react';

const Header = ({ changeShowModal }) => {
  const handleClick = () => {
    changeShowModal();
  };

  return (
    <header className="bg-gray-200 p-4 flex flex-wrap justify-between items-center">
      <h1 className="text-2xl font-bold">Usuarios</h1>
      <button onClick={handleClick} className="bg-primary text-white p-2">
        <i className="bx bx-plus"></i>Crear nuevo usuario
      </button>
    </header>
  );
};

export default Header;
