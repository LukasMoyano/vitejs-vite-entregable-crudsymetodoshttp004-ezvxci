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

  const createUsers = (data, reset) => {
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

  const resetModalForm = (reset) => {
    setIsShowModal(false);
    reset(DEFAULT_VALUES);
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
        createUsers={createUsers}
      />
      <UserList users={users} />
    </main>
  );
}

export default App;
