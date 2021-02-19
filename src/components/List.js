import '../App.css';
import {useState} from 'react';
// import 'boxicons';

const List = () => {

     const [user, setUser] = useState({
          name: '',
          surname: '',
          email: '',
          status: '',
          obs: ''
     });
     const [users, setUsers] = useState([]);

     return (
          <div className="list">
               <div className="titles">
                    <ul>
                         <li>Nombre</li>
                         <li>Apellido</li>
                         <li>Email</li>
                         <li>Status</li>
                         <li></li>
                         {/*  <li><a href="#"><i class='bx bxs-trash'></i></a></li>
                         <li><a href="#"><i class='bx bxs-edit'></i></a></li> */ }
                    </ul>
               </div>

               <div className="items">
                    <h1>Items</h1>
               </div>
          </div>
     );
}
 
export default List;
