
import { useState } from 'react';
import LoginForm from './component/LoginForm';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function App() {


  const adminUser = {
  email : "admin@admin.com",
  password : "admin123"    
  }

  const [user,setUser] = useState({name: "" , email:""});
  const [error,setError] = useState("")


  const Login = details => {
    console.log(details)

    if(details.email === adminUser.email && details.password === adminUser.password) {
      console.log("match")
      setUser({
        name:details.name,
        email:details.email
      })
    } else { 

      setError("böyle bir kullanıcı bulunamamaktadır")
      console.log( "dont match")
    }
  }

  const Logout = () => {
     
    setUser({
      name: "" , 
      
      email:""

    })
  }

  return (
    <div className="App">
   
     {(user.email != "") ? (
        
     <div className='welcome'> 
     
       <h2>Welcome</h2><span>{user.name}</span>
      <button onClick={Logout} class="btn btn-primary btn-block mb-4">Logout</button>

     </div>
     ) : (

      <LoginForm   Login = {Login} error = {error}/>
     ) }

    </div>
  );
      }

export default App;
