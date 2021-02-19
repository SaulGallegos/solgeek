import '../App.css';

const List = ({users, setEdit, setEditUser}) => {

     return (
          <div className="list">
               <div className="titles">
                    <ul>
                         <li>Nombre</li>
                         <li>Apellido</li>
                         <li>Email</li>
                         <li>Status</li>
                         <li><i class='bx bxs-trash'></i>   <i class='bx bxs-edit'></i></li>
                    </ul>
               </div>

               {users.map(user => (

                    <div className="items">
                    <ul>
                         <li>{user.name}</li>
                         <li>{user.surname}</li>
                         <li>{user.email}</li>
                         <li>
                              {
                                   user.status === 'active'
                              ? 
                                   <i class='bx bx-check-circle'></i>
                              :
                                   <i class='bx bx-x'></i>
                              }
                         </li>
                         <li>
                              <a href="#">
                                   <i class='bx bxs-trash'></i>
                              </a>   <a href="#" onClick={()=>{setEdit(true); setEditUser(user);}}>
                                   <i class='bx bxs-edit'></i>
                              </a>
                         </li>
                    </ul>
                    </div>

               ))}


               <div className="items">
                    <ul>
                         <li>Saul</li>
                         <li>Gallegos</li>
                         <li>Email@gmail.com</li>
                         <li><i class='bx bx-check-circle'></i></li>
                         <li>
                              <a href="#">
                                   <i class='bx bxs-trash'></i>
                              </a>   <a href="#">
                                   <i class='bx bxs-edit'></i>
                              </a>
                         </li>
                    </ul>
               </div>
               
          </div>
     );
}
 
export default List;
