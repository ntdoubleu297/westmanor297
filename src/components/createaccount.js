import {Card, Button} from 'react-bootstrap';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router";
import './suburb.css';
import NeilWhite from './BatmanForeverntdoubleu2976lah.png';
import validator  from 'validator';


const CreateAccount = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [emaillogin, setEmaillogin] = React.useState('');
  const [passwordlogin, setPasswordlogin] = React.useState('');
 


  const navigate = useNavigate();

const createUser = async (e) => {
    e.preventDefault();

    const newPasswordtwo = e.target.value;
    setConfirmPassword(newPasswordtwo);
    if (confirmPassword !== document.getElementById('password').value) {
        setIsValid3(false);
    }
    if (confirmPassword === document.getElementById('password').value) {
        setIsValid3(true);
    }
    
    const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name, email, password
        }),
    })

    const data = await response.json()
    console.log(data);

    if (data.status === 'ok'){
        alert('Registration Successful, please Login.')
        navigate('/login')
    }

    if (data.status === 'error'){
        alert('User already exists - Registration Unsuccessful, please Try Again.')
        //navigate('/createaccount')
    }

    

   // if (document.getElementById('message').innerHTML.value === 'Password length must be atleast 8 characters!'){
      //  alert('Password must contain atleast 8 characters - Registration Unsuccessful, please Try Again.')
   // }

}



//const [show, setShow] = React.useState(true);
//const [status13, setStatus13] = React.useState('');
const [data, setData] = React.useState('');



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
        console.log(response.json());
        //alert('Login Successful')
       // setEmail(response.data);
       // localStorage.setItem('email', response.data);
       // console.log(response.data);
        window.location.href = '/login'
    } else {
        alert('Please check your username and password')
    }
}


React.useEffect(() => {
  fetch('http://localhost:5000/users')
  .then(data => {
      console.log(data);

      setData(JSON.stringify(data));
  });
}, []);





function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
            return [hovering, onHoverProps]
        }

        
            const [buttonAIsHovering, buttonAHoverProps] = useHover();


            const [isValid, setIsValid] = React.useState(true);

            const handleChangeEmail = (e) => {
                const newEmail = e.target.value;
                setEmail(newEmail);
                setIsValid(validator.isEmail(newEmail));
            };

            const [isValid2, setIsValid2] = React.useState(true);

            const handleChangePassword = (e) => {
               var newPassword = e.target.value;
                setPassword(newPassword);
                if (newPassword.length < 6) {
                    setIsValid2(false);
                }
                else{

                    return setIsValid2(true);
                }
                // return document.getElementById('message').innerHTML = 'Password length must be atleast 6 characters!';
                
                // if (newPassword.length > 6) {
                 //   setIsValid2(document.getElementById('valid').disabled === false);
               // }
               //  return document.getElementById('message').innerHTML = '';
                      //return false;
                  }  
                    

               // setIsValid(validator.isEmail(newEmail));

               const [confirmPassword, setConfirmPassword] = React.useState('');
               const [isValid3, setIsValid3] = React.useState(true);

               const handleConfirmPassword = (e) => {
                var newPasswordtwo = e.target.value;
                setConfirmPassword(newPasswordtwo);
                if (confirmPassword !== `${password}`) {
                    setIsValid3(false);
                }
                if (confirmPassword === `${password}`) {  
                    setIsValid3(true);
                }
               
            }




            
         


return(  
 

    <div className='innerelementback'>
       <div className='background64'>
       <a className='fontnav64ctg' style={{zIndex: '7', position: 'absolute', left: '575px', top: '250px' }}href='/login' {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here.' : 'Log In'}</a>
       <div className='fontwater64' style={{zIndex: '7', position: 'absolute', left: '470px', top: '20px', width: '317px', height: '157px', borderRadius: '50%', background: 'rgb(16, 16, 16)', border: '3.5px solid rgb(34,34,34)' }}></div>
                  <img src={NeilWhite} width={255} height={350} style={{zIndex: '7', position: 'absolute', left: '500px', top: '54px' }} />
                  <div className='titlewater' style={{zIndex: '7', position: 'absolute', left: '475px', top: '190px' }}>West Enterprises</div>
                  </div>    
                  <div style={{zIndex: '7', position: 'absolute', left: '460px', top: '325px', width: '315px', height: '400px', borderRadius: '3.6%', background: 'rgb(34, 34,34)', border: '3.5px solid rgb(34,34,34)' }} >
        
        <form onSubmit={createUser}>
            <input style={{ zIndex: '7', position: 'absolute', left: '50px', width: '13rem', top: '50px', height: '33px', borderRadius: '8%' }} value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' />
           <div>
            <input style={{ width: '13rem', zIndex: '7', position: 'absolute', left: '50px', top: '125px', height: '33px', borderRadius: '8%'}} value={email} onChange={handleChangeEmail} type='text' placeholder='Email' />
           {!isValid && <p  style={{color: 'gray'}} > Please enter a  valid email address. </p>}
           </div>
           <div>
            <input style={{ width: '13rem', zIndex: '7', position: 'absolute', left: '50px', top: '200px', height: '33px', borderRadius: '8%'}}  id='password' value={password} onChange={handleChangePassword} type='text' placeholder='Password' />
            {!isValid2 && <p style={{color: 'gray', zIndex: '7', position: 'absolute', left: '50px', top: '230px'}}>Password must be 6+ characters!</p>}
            </div>
            <div style={{ width: '13rem', zIndex: '7', position: 'absolute', left: '50px', top: '230px'}}  id='message' ></div>
            <div>
            <input style={{ width: '13rem', zIndex: '7', position: 'absolute', left: '50px', top: '275px', height: '33px', borderRadius: '8%'}}  id='confirmpassword' value={confirmPassword} onChange={handleConfirmPassword} type='text' placeholder='Confirm Password' />
            {!isValid3 && <p style={{color: 'gray', zIndex: '7', position: 'absolute', left: '60px', top: '305px' }}>Passwords do not match.</p>}
            </div>
            <Button disabled={!isValid || !isValid2 || !isValid3} id='valid' className='buttonctg' style={{zIndex: '7', position: 'absolute', left: '85px', top: '340px', opacity: isValid || isValid2 || isValid3 ? 1 : 0.1 }} variant='light' name='submit' type='submit' value='Create' data-dismiss='alert' onClick={createUser}>Create Account</Button>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
   
    </div>
    <div style={{height: '100px', width: '1300px', position: 'absolute', top: '400px', background: 'rgb(23,23,23)'}}></div>
            <div style={{height: '100px', width: '1300px', position: 'absolute', top: '500px', background: 'rgb(22.7,22.7,22.7)'}}></div>
             <div style={{height: '275px', width: '1300px', position: 'absolute', top: '600px', background: 'rgb(22.6,22.6,22.6)'}}></div>
    </div>

)
}


export default CreateAccount;














      

        










            
        
   