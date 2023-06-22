import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ModalForm = ({
  isShowModal,
  changeShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;
    if (isUserToUpdate) {
      updateUser(data);
    } else {
      createUser(data, reset);
    }
  };

  const handleCloseModal = () => {
    changeShowModal();
  };

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate);
    }
  }, [isUserToUpdate]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-40 grid place-content-center ${
        isShowModal ? 'opacity-100 visible' : 'invisible opacity-0'
      } transition-opacity`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white w-full max-w-sm p-6 rounded-md mx-auto relative"
      >
        <h3 className="font-bold text-2xl mb-6">
          {isUserToUpdate ? 'Editar Usuario' : 'Nuevo usuario'}
        </h3>

        {/* Input nombre */}
        <div className="mb-4">
          <label className="font-bold text-sm" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="bg-gray-200 rounded-md p-2 w-full"
            type="text"
            id="first_name"
            {...register('first_name')}
          />
        </div>

        {/* Input apellidos */}
        <div className="mb-4">
          <label className="font-bold text-sm" htmlFor="last_name">
            Apellidos
          </label>
          <input
            className="bg-gray-200 rounded-md p-2 w-full"
            type="text"
            id="last_name"
            {...register('last_name')}
          />
        </div>

        {/* Input correo */}
        <div className="mb-4">
          <label className="font-bold text-sm" htmlFor="email">
            E-mail
          </label>
          <input
            className="bg-gray-200 rounded-md p-2 w-full"
            type="email"
            id="email"
            {...register('email')}
          />
        </div>

        {/* Input contraseña */}
        <div className="mb-4">
          <label className="font-bold text-sm" htmlFor="password">
            Contraseña
          </label>
          <input
            className="bg-gray-200 rounded-md p-2 w-full"
            type="password"
            id="password"
            {...register('password')}
          />
        </div>

        {/* Input fecha de nacimiento */}
        <div className="mb-4">
          <label className="font-bold text-sm" htmlFor="birthday">
            Fecha de Nacimiento
          </label>
          <input
            className="bg-gray-200 rounded-md p-2 w-full"
            type="date"
            id="birthday"
            {...register('birthday')}
          />
        </div>

        <button
          type="button"
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-2xl hover:text-secondary"
        >
          <i className="bx bx-x"></i>
        </button>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary"
        >
          {isUserToUpdate ? 'Guardar cambios' : 'Agregar nuevo usuario'}
        </button>
      </form>
    </section>
  );
};

export default ModalForm;
