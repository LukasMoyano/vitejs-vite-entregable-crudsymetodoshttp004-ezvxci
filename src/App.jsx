import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ModalForm from './components/ModalForm';
import axios from 'axios';
import UserList from './components/UserList';

const BASE_URL = 'https://users-crud.academlo.tech';

const DEFAULT_VALUES = {
  birthday: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

function App() {
  const [isUserToUpdate, setisUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  const changeShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const getAllUsers = () => {
    const url = BASE_URL + '/users/';

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const url = BASE_URL + '/users/' + id;

    axios
      .delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const createUser = (data, reset) => {
    const url = BASE_URL + '/users/';

    axios
      .post(url, data)
      .then(({ data }) => {
        setUsers([...users, data]);
        reset(DEFAULT_VALUES);
        setIsShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  const editUser = (id, updatedData) => {
    const url = BASE_URL + '/users/' + id;

    axios
      .put(url, updatedData)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main>
      <Header changeShowModal={changeShowModal} />

      <ModalForm
        changeShowModal={changeShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        changeShowModal={changeShowModal}
        editUser={editUser}
      />
    </main>
  );
}

export default App;
