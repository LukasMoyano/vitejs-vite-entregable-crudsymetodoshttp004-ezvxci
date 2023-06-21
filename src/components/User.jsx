import { format, differenceInYears, getDayOfYear } from 'date-fns';
import es from 'date-fns/locale/es';

const User = ({ user, deleteUser, changeShowModal, editUser }) => {
  // Extraer información del usuario
  const { birthday } = user;
  const parsedBirthday = new Date(birthday);
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
    // Mostrar el formulario de edición
    changeShowModal();

    const updatedData = {};

    editUser(user.id, updatedData);
  };

  return (
    <article>
      {/* Mostrar nombre y apellido del usuario */}
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <div>
        <h5>Edad: {age} años</h5>
        <h5 className="bx bx-gift">Cumpleaños: {formattedBirthday}</h5>
        <h5>Enviale Una Targeta Postal</h5>
        <span>{user.email}</span>
      </div>
      <div>
        <button onClick={handleClickUpdate}>
          <i className="bx bxs-edit"></i>Editar Info
        </button>
        <button onClick={handleClickDelete}>
          <i className="bx bx-trash"></i>Borrar
        </button>
      </div>
    </article>
  );
};

export default User;
