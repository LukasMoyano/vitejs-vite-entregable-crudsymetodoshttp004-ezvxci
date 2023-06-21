import User from './User';


const UserList = ({ users, deleteUser }) => {
  return (
    <section className="grid gap-6">
      {users.map((user) => (
        <User key={user.id} user={user} deleteUser={deleteUser} />
      ))}
    </section>
  );
};
export default UserList;
