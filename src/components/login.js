import {Card, Button} from 'react-bootstrap';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router";
import './suburb.css';
import NeilWhite from './BatmanForeverntdoubleu2976lah.png';
import pixa from './pixabay.jpg';
import multifam from './multifam.jpg';


const Login = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
 
 


  const navigate = useNavigate();




//const [show, setShow] = React.useState(true);
//const [status13, setStatus13] = React.useState('');
const [data, setData] = React.useState([]);



async function Login(e) {
    e.preventDefault();


    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }),
    })
    const data = await response.json();
    console.log(response.json());
    if (data.user) {
       // console.log(response.json());
        alert('Login Successful')
       // setEmail(response.data);
       // localStorage.setItem('email', response.data);
       // console.log(response.data);
        window.location.href = '/singlefamily'
    } else {
        alert('Please check your username and password')
    }
}


//React.useEffect(() => {
 // fetch('http://localhost:5000/users')
  //.then(data => {
    //  console.log(data);

     // setData(JSON.stringify(data));
 // })
//}, []);





function verifyPassword(){
  const password = document.getElementById('password').value;
  if (password === '') {
      return document.getElementById('message').innerHTML = 'Fill in your Password Please!';
  }
  if (password.length < 8) {
      document.getElementById('message').innerHTML = 'Password length must be atleast 8 characters!';
      return false;
  }
}





function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
  }
          return [hovering, onHoverProps]
      }

      
          const [buttonAIsHovering, buttonAHoverProps] = useHover();



return(  
 

    <div className='innerelementback'>
       <div className='background64'>
       <a className='fontnav64ctg' style={{zIndex: '7', position: 'absolute', left: '525px', top: '250px' }}href='/createaccount' {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here.' : 'Create Account'}</a>
       <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '470px', top: '20px', width: '317px', height: '157px', borderRadius: '50%', background: 'rgb(16, 16, 16)', border: '3.5px solid rgb(34,34,34)' }}></div>
                  <img src={NeilWhite} width={255} height={350} style={{zIndex: '7', position: 'absolute', left: '500px', top: '54px' }} />
                  <div className='titlewater' style={{zIndex: '7', position: 'absolute', left: '475px', top: '190px' }}>West Enterprises</div>
                  </div>    
    
      
      <div style={{zIndex: '7', position: 'absolute', left: '460px', top: '325px', width: '315px', height: '400px', borderRadius: '3.6%', background: 'rgb(34, 34,34)', border: '3.5px solid rgb(34,34,34)' }} >
        <form onSubmit={Login}>
               
                
                <input type='text' placeholder='Enter Email' style={{ zIndex: '7', position: 'absolute', left: '50px', width: '13rem', top: '50px', height: '33px', borderRadius: '8%' }} id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} /><br/>
                
                <div style={{color: 'red'}}>{status}</div>
                <br/>
               
                <input type='password' placeholder='Enter Password' style={{ width: '13rem', zIndex: '7', position: 'absolute', left: '50px', top: '125px', height: '33px', borderRadius: '8%'}} id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br/>
                <div id='message' style={{color: 'red'}}></div>
                <br/>
                <Button className='button64' style={{zIndex: '7', position: 'absolute', left: '85px', top: '280px'}} variant='light' name='submit' type='submit' value='Login' data-dismiss='alert' onClick={Login}>Login</Button>

            </form>
            </div>
            
            <div style={{height: '100px', width: '1300px', position: 'absolute', top: '400px', background: 'rgb(23,23,23)'}}></div>
            <div style={{height: '100px', width: '1300px', position: 'absolute', top: '500px', background: 'rgb(22.7,22.7,22.7)'}}></div>
             <div style={{height: '275px', width: '1300px', position: 'absolute', top: '600px', background: 'rgb(22.6,22.6,22.6)'}}></div>
           
            
    </div>
    

)
}

export default Login;














      

        










            
        
   