import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth  ,db} from '../firebase';
import './login.css'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const LoginForm: React.FC = () => {

  const [email, setemail] = useState<any>("")
  const [password, setpassword] = useState<any>("")
  const navigate = useNavigate();
  interface FormState {
  
     password: string;
     email: string;
   }

   const [errors, setErrors] = useState<FormState>({
    email: '',
    password: '',  
  });

  const validateForm = (): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

   

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      newErrors.password = '';
    }


    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
        try {
          await signInWithEmailAndPassword(auth,email,password) 
          console.log('Login successfully:', );
          toast.success("Login successfully!!",{position:'top-center'})
          navigate('/')
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log('Error:',error );
                toast.error(error.message,{position:'bottom-center'})       
             }
        }
       
      }
  };

  return (
    <div className="login-form-container">
     
      <form className='basic-form' onSubmit={handleSubmit}>
      <h2  className='heading'>Login</h2>
        <div>
          <label className="basic-label" htmlFor="email">Email :</label>
          <input
          className='basic-input'
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={ (e)=>{setemail(e.target.value)}}
  />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label className="basic-label" htmlFor="password">Password :</label>
          <input
          className='basic-input'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={ (e)=>{setpassword(e.target.value)}}    
          />
        </div>
        {errors.email && <div className="error">{errors.password}</div>}

        <button  className="submit-btn" type="submit">Login</button>
        <p >New to on platform <b onClick={()=>{ navigate('/register')}}> register </b></p>
      </form>
      <div className='toster'>
    <ToastContainer/>
    </div>
    </div>
  );
};

export default LoginForm;
