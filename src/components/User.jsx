const User = ({ user }) => {
  return (
    <div>
      <p>Nombre: {user.first_name}</p>
      <p>Apellidos: {user.last_name}</p>
      {/* Mostrar otros detalles del usuario */}
    </div>
  );
};

export default User;
