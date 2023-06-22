import { format, differenceInYears, getDayOfYear, parseISO } from 'date-fns';
import es from 'date-fns/locale/es';

const User = ({
  user,
  deleteUser,
  changeShowModal,
  editUser,
  setIsUserToUpdate,
}) => {
  // Extraer información del usuario
  const { birthday } = user;
  const parsedBirthday = parseISO(birthday); // Parsear la fecha en formato ISO 8601
  const formattedBirthday = format(parsedBirthday, "EEEE d 'de' MMMM", {
    locale: es,
  });
  const age = differenceInYears(new Date(), parsedBirthday);
  const birthdayDayOfYear = getDayOfYear(parsedBirthday);

  // Función para manejar el evento de eliminar el usuario
  const handleClickDelete = () => {
    deleteUser(user.id);
  };

  // Función para manejar el evento de editar el formulario
  const handleClickUpdate = () => {
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <article className="bg-white p-4 rounded-md shadow-md">
      {/* Mostrar nombre y apellido del usuario */}
      <h4 className="font-bold text-xl mb-2">
        {user.first_name} {user.last_name}
      </h4>
      <div>
        <h5 className="text-gray-600">Edad: {age} años</h5>
        <h5 className="text-gray-600">
          <i className="bx bx-gift"></i> Cumpleaños: {formattedBirthday}
        </h5>
        <h5 className="text-gray-600">Envíale una Tarjeta Postal</h5>
        <span className="text-gray-600">{user.email}</span>
      </div>
      <div className="mt-4">
        <button
          onClick={handleClickUpdate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
        >
          <i className="bx bxs-edit"></i> Editar Info
        </button>
        <button
          onClick={handleClickDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          <i className="bx bx-trash"></i> Borrar
        </button>
      </div>
    </article>
  );
};

export default User;
