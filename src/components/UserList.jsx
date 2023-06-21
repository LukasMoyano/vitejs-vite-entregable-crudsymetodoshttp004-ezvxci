const UserList = ({users}) => {
  return (
  <section>

    {
      users.map((user) => <User /> )
    }    

  </section>;
)};
export default UserList;
