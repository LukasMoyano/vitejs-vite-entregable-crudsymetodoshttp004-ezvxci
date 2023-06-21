import React, { useState } from 'react';
import { format, differenceInYears, getDayOfYear } from 'date-fns';
import es from 'date-fns/locale/es';

const User = ({ user, handleDelete, handleEdit }) => {
  const { birthday } = user;
  const parsedBirthday = new Date(birthday);
  const formattedBirthday = format(parsedBirthday, "EEEE d 'de' MMMM", {
    locale: es,
  });
  const age = differenceInYears(new Date(), parsedBirthday);
  const birthdayDayOfYear = getDayOfYear(parsedBirthday);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = () => {
    handleEdit(editedUser);
    setIsEditing(false);
  };

  return (
    <div>
      <p>
        {user.first_name} {user.last_name}
      </p>
      <p>Edad: {age} años</p>
      <p>Cumpleaños: {formattedBirthday}</p>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="first_name"
            value={editedUser.first_name}
            onChange={handleEditInputChange}
          />
          <input
            type="text"
            name="last_name"
            value={editedUser.last_name}
            onChange={handleEditInputChange}
          />
          <button onClick={handleEditSubmit}>
            <i className="bx bx-save" style={{ color: '#ffffff' }}></i>
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleDelete(user.id)}>
            <i className="bx bx-trash" style={{ color: '#ffffff' }}></i>
          </button>
          <button onClick={() => setIsEditing(true)}>
            <i className="bx bxs-edit"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
