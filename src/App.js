import './App.css';
import List from './components/List';
import FormAdd from './components/FormAdd';
import {useState} from 'react';


function App() {

  const [edit, setEdit] = useState(false);

  const [users, setUsers] = useState([
    {
         name: 'Saul',
         surname: 'Gallegos',
         email: 'saul@solgeek.com',
         status: 'activo',
         obs: ''
    },
    {
         name: 'Albert',
         surname: 'Einstein',
         email: 'Alb@gmail.com',
         status: 'activo',
         obs: ''
    },
    {
         name: 'Juan',
         surname: 'Carrera',
         email: 'carr33@gmail.com',
         status: 'inactivo',
         obs: ''
    },
    {
         name: 'Pablo',
         surname: 'Gomez',
         email: 'gomp@hotmail.com',
         status: 'activo',
         obs: ''
    },
    {
         name: 'Pau',
         surname: 'Terraza',
         email: 'terraPau@mail.com.mx',
         status: 'inactivo',
         obs: ''
    }
]);

  return (
    <div className="App">
      <FormAdd
        edit={edit}
        setEdit={setEdit}
      />
      <List
        users={users}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
