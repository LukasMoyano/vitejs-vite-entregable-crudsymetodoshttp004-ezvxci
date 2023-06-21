import { format, differenceInYears, getDayOfYear } from 'date-fns';
import es from 'date-fns/locale/es';

const User = ({ user, deleteUser, handleEdit }) => {
  // Extraer información del usuario
  const { birthday } = user;
  const parsedBirthday = new Date(birthday);
  const formattedBirthday = format(parsedBirthday, "EEEE d 'de' MMMM", {
    locale: es,
  });
  const age = differenceInYears(new Date(), parsedBirthday);
  const birthdayDayOfYear = getDayOfYear(parsedBirthday);

  // Enviar los cambios al componente padre para editar el usuario
  const handleEditSubmit = () => {
    handleEdit(editedUser);
    setIsEditing(false);
  };

  return (
    <article>
      {/* Mostrar nombre y apellido del usuario */}
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <div>
        {/* Mostrar edad del usuario */}
        <h5>Edad: {age} años</h5>
        {/* Mostara la edad del usuario llevada a al mes y dia del años ne que le coinsida el nacimiento */}
        <h5>Cumpleaños: {formattedBirthday}</h5>
      </div>

      <div>
        {/* Botón para eliminar el usuario */}
        <button onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash"></i>
        </button>

        {/* Botón para activar el modo de edición */}
        <button onClick={handleClickDelete}>
          <i className="bx bxs-edit"></i>
        </button>
      </div>
    </article>
  );
};

export default User;
