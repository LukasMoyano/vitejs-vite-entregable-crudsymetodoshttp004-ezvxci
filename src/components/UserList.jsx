import User from './User';

const UserList = ({ users }) => {
  return (
    <section>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
