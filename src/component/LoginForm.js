import { useState } from "react";
import Form from 'react-bootstrap/Form';



export default function LoginForm({Login,error}) {

const [details,setDetails] = useState({name:"",email:"",password:""});

const submitHandler = (e) => {
  
    e.preventDefault();

    Login(details)

}

    return (

        <form onSubmit={submitHandler} >
           
            <div class="form-outline mb-4">
                <h2>Login</h2>
                <div class="form-outline mb-4">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={(e) => setDetails({...details,name:e.target.value})} value= {details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={(e) => setDetails({...details,email:e.target.value})} value= {details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={(e) => setDetails({...details,password:e.target.value})} value= {details.password}/>
                </div>

                <input type="submit" value="LOGIN"></input>
            </div>
            {(error != "") ? (<div>{error}</div>) :(
                ""
            )}
        </form>
    )


}