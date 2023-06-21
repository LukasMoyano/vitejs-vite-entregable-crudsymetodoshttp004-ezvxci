import User from './User';

const UserList = ({ users, deleteUser, changeShowModal, editUser }) => {
  return (
    <section className="grid gap-6">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          editUser={editUser}
        />
      ))}
    </section>
  );
};

export default UserList;
