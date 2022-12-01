import { useFormik } from "formik";
import validations from "../compononets/validations";



export default function SignUP () {
    const {handleSubmit,handleChange,values,errors,touched,handleBlur} = useFormik({
        initialValues: {
         
            email: '',
            password:"",
            passwordConfirm:""
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema:validations
      });
      console.log(errors)

return (


<div>

<h1>Sign Up</h1>

      
       
        
          
<form onSubmit={handleSubmit}>
 
 

  <br>
  </br>
  <label>Email</label>
  <input name='email' onChange={handleChange} value= {values.email}   onBlur = {handleBlur}></input>

  {errors.email && touched.email && <div style={{color:"red"}}>{errors.email}</div>}
  <br>
  </br>
  <label >password</label>
  <input type="password" name='password' onChange={handleChange} value = {values.password} onBlur = {handleBlur} ></input>
  {errors.password && touched.password && <div style={{color:"red"}}>{errors.password}</div>}

  <br>
  </br>
  <label >passwordConfirm</label>
  <input type="password" name='passwordConfirm' onChange={handleChange} value = {values.passwordConfirm}  onBlur = {handleBlur}></input>
  {errors.passwordConfirm && touched.passwordConfirm && <div style={{color:"red"}}>{errors.passwordConfirm}</div>}
    

  <button type="submit">Submit</button>
  <br /><br />

  {JSON.stringify(values)}
</form>

</div>


)


}