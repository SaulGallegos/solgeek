import '../App.css';
import useForm from '../useForm';
import validate from '../Validator';

const FormAdd = ({edit}) => {

     const {handleChange, values, handleSubmit, errors} = useForm(validate);

     return (
          <div className="form-content">
               <form
                    className="form"
                    onSubmit={handleSubmit}
               >
                    {edit ? 
                         <h1>Editar usuario</h1>
                         :
                         <h1>Crear nuevo usuario</h1>               
                    }

                    <div className="form-inputs">
                         <label 
                              htmlFor="name"
                              className="form-label"
                         >Nombre: </label>
                         <input
                              id="name"
                              type="text"
                              name="name"
                              className="form-input"
                              placeholder="Nombre"
                              value={values.name}
                              onChange={handleChange}
                         />
                         {errors.name ? <p>{errors.name}</p> : null}
                    </div>

                    <div className="form-inputs">
                         <label 
                              htmlFor="surname"
                              className="form-label"
                         >Apellido: </label>
                         <input
                              id="surname"
                              type="text"
                              name="surname"
                              className="form-input"
                              placeholder="Apellido"
                              value={values.surname}
                              onChange={handleChange}
                         />
                         {errors.surname ? <p>{errors.surname}</p> : null}
                    </div>

                    <div className="form-inputs">
                         <label 
                              htmlFor="email"
                              className="form-label"
                         >Email:</label>
                         <input
                              id="email"
                              type="email"
                              name="email"
                              className="form-input"
                              placeholder="saulgallegos@solgeek.com"
                              value={values.email}
                              onChange={handleChange}
                         />
                         {errors.email ? <p>{errors.email}</p> : null}
                    </div>

                    <div className="form-inputs">
                         <label
                              htmlFor="status"
                              className="form-label">Status: </label>
                         <select 
                              id="status"
                              className="form-input"
                              name="status"
                              value={values.status}
                              onChange={handleChange}
                         >
                              <option value="active">Activo</option>
                              <option value="inactive">Inactivo</option>
                         </select>
                    </div>

                    <div className="form-inputs">
                         <label 
                              htmlFor="obs"
                              className="form-label"
                         >Observaciones: </label>
                         <textarea
                              id="obs"
                              name="obs"
                              className="form-input"
                              value={values.obs}
                              onChange={handleChange}
                         ></textarea>
                    </div>

                    <button
                         className="form-input-btn"
                         type="submit"
                    >
                         Guardar usuario
                    </button>

               </form>
          </div>
     );
}
 
export default FormAdd;
