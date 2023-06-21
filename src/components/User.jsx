import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p>Email: {user.email}</p>
      {/* Mostrar otros datos del usuario */}
    </div>
  );
};

export default User;
