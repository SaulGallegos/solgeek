import './App.css';
import List from './components/List';
import FormAdd from './components/FormAdd';
import {useState} from 'react';


function App() {

  const [edit, setEdit] = useState(false);
  const [editUser, setEditUser] = useState({});

  const users = [
    {
         id: 1,
         name: 'Saul',
         surname: 'Gallegos',
         email: 'saul@solgeek.com',
         status: 'active',
         obs: ''
    },
    {
         id: 2,
         name: 'Albert',
         surname: 'Einstein',
         email: 'Alb@gmail.com',
         status: 'active',
         obs: ''
    },
    {
         id: 3,
         name: 'Juan',
         surname: 'Carrera',
         email: 'carr33@gmail.com',
         status: 'inactive',
         obs: ''
    },
    {
         id: 4,
         name: 'Pablo',
         surname: 'Gomez',
         email: 'gomp@hotmail.com',
         status: 'active',
         obs: ''
    },
    {
         id: 5,
         name: 'Pau',
         surname: 'Terraza',
         email: 'terraPau@mail.com.mx',
         status: 'inactive',
         obs: ''
    }
  ];

  return (
    <div className="App">
      <FormAdd
        edit={edit}
        setEdit={setEdit}
        editUser={editUser}
      />
      <List
        users={users}
        setEdit={setEdit}
        setEditUser={setEditUser}
      />
    </div>
  );
}

export default App;
