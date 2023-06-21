import React from 'react';

const Header = ({ handleClickShowModal }) => {
  const handleClick = () => {
    handleClickShowModal();
  };

  return (
    <section className="flex justify-between p-4">
      <h1 className="font-bold text-2xl">Usuarios</h1>

      <button onClick={handleClick} className="bg-primary text-white p-2">
        <i className="bx bx-plus"></i>Crear nuevo usuario
      </button>
    </section>
  );
};

export default Header;
