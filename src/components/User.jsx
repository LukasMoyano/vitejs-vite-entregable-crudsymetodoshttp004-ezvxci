import React from 'react';
import { format, differenceInYears, getDayOfYear } from 'date-fns';
import es from 'date-fns/locale/es';

const User = ({ user }) => {
  const { birthday } = user;
  const parsedBirthday = new Date(birthday);
  const formattedBirthday = format(parsedBirthday, 'EEEE d \'de\' MMMM', { locale: es });
  const age = differenceInYears(new Date(), parsedBirthday);
  const birthdayDayOfYear = getDayOfYear(parsedBirthday);

  return (
    <div>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>
        Edad: {age} años
      </p>
      <p>
        Cumpleaños: {formattedBirthday}
      </p> 
      <button>Eliminia</button>
      <button>editar informacion</button>
    </div>
  );
};

export default User;
