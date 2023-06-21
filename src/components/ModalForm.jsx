import { useForm } from 'react-hook-form';

const ModalForm = ({ isShowModal, changeShowModal, createUsers }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (!data.birthday) data.birthday = null;
    createUsers(data);
  };

  const handleCloseModal = () => {
    changeShowModal();
  };
  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-40 grid place-content-center ${
        isShowModal ? 'opacity-100 visible' : 'invisible opacity-0'
      } transition-opacity`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[280px] p-4 grid gap-4 relative"
      >
        <h3 className="text-2xl font-bold text-center">Nuevo Usuario</h3>

        {/* input nombre */}
        <div className="grid  gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Nombre
          </label>
          <input
            className="bg-gray-200"
            type="text"
            {...register('first_name')}
          />
        </div>

        {/* input apellidos */}
        <div className="grid  gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Apellidos
          </label>
          <input
            className="bg-gray-200"
            type="text"
            {...register('last_name')}
          />
        </div>

        {/* input correo */}
        <div className="grid  gap-2">
          <label className="font-bold text-sm" htmlFor="">
            E-mail
          </label>
          <input className="bg-gray-200" type="email" {...register('email')} />
        </div>

        {/* input contraseña */}
        <div className="grid  gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Contraseña
          </label>
          <input
            className="bg-gray-200"
            type="password"
            {...register('password')}
          />
        </div>

        {/* input fecha de nacimiento */}
        <div className="grid  gap-2">
          <label className="font-bold text-sm" htmlFor="">
            Fecha de Nacimiento
          </label>
          <input
            className="bg-gray-200"
            type="date"
            {...register('birthday')}
          />
        </div>

        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-2xl"
        >
          <i className="bx bx-x"></i>
        </button>

        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="btn-primary p-2 px-4 rounded hover:text-secondary"
        >
          Agregar nuevo usuario
        </button>
      </form>
    </section>
  );
};

export default ModalForm;
