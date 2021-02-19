export default function validate(values){
     let errors = {}

     if(!values.name){
          errors.name = "Nombre requerido";
     }

     if(!values.surname){
          errors.surname = "Apellido requerido";
     }

     if(!values.email){
          errors.email = "Email requerido";
     } else if(!/\S+@\S+\.\S+/.test(values.email)){
          errors.email = "Email invalido"
     }

     return errors;
}