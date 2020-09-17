import { useState } from "react"

export const useForm = (initialState={}) => {

     //podría mandar datos de validación

     const [values, setValues] = useState(initialState); 

     const handledInputChange= ({target})=>{     
          setValues({
               ...values, 
               [target.name]: target.value
          });           
     }

     return [values, handledInputChange]; 

}
