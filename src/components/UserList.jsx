import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <section>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </section>
  );
};

export default UserList;
