import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth  ,db} from '../firebase';
import {setDoc,doc} from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import './register.css'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
  interface FormState {
 fName: string;
  lName: string;
  password: string;
  email: string;
}
const [email, setemail] = useState<any>("")
const [password, setpassword] = useState<any>("")
const [fName, setfName] = useState<String>("")
const [lName, setlName] = useState<String>("")
const [errors, setErrors] = useState<FormState>({
    fName:'',
    lName: '',
    email: '',
    password: '',  
  });
  const navigate = useNavigate();
  const validateForm = (): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!fName) {
      newErrors.fName = 'First Name is required';
      isValid = false;
    } else {
      newErrors.fName = '';
    }
    if (!lName) {
        newErrors.lName = 'Last Name is required';
        isValid = false;
      } else {
        newErrors.lName = '';
      }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
        try {
       await   createUserWithEmailAndPassword(auth,email,password)
       const user = auth.currentUser;
       console.log("user",user)
       if(user){
        await setDoc(doc(db,"Users id",user.uid),{
            firstName: fName,
            lastName : lName,
            email: email,
            password: password
        })
       }
       console.log('Form submitted successfully with data:', );
       toast.success("Form submitted successfully!!",{position:'top-center'})
       navigate('/login')
        }  catch (error: unknown) {
            // Narrow the type using instanceof
            if (error instanceof Error) {
                console.log('Error:',error );
                toast.error(error.message,{position:'bottom-center'})       
             }
        }
    }
  };
return (<>
  <div className="login-form-container">
    <form className='basic-form' onSubmit={handleSubmit} noValidate>
        <h3 className='heading'>Registration Form</h3>
        <div>
      <div >

        <label  className="basic-label" htmlFor="username">First Name :</label>
        <input
          className='basic-input'
          type="text"
          id="fName"
          name="fName"
          value={fName}
          onChange={ (e)=>{setfName(e.target.value)}}        />
         </div>
        {errors.fName && <div className="error">{errors.fName}</div>}
      </div>

      <div>
      <div>

        <label   className="basic-label" htmlFor="username">Last Name : </label>
        <input
          className='basic-input'
          type="text"
          id="lName"
          name="lName"
          value={lName}
          onChange={ (e)=>{setlName(e.target.value)}}        />
          </div>
        {errors.lName && <div className="error">{errors.lName}</div>}
      </div>
      <div>
      <div >

        <label className="basic-label" htmlFor="email">Email : </label>
        <input
          className='basic-input'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={ (e)=>{setemail(e.target.value)}}
        />
        </div>
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div>
      <div >

        <label  className="basic-label" htmlFor="password">Password : </label>
        <input
        className='basic-input'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={ (e)=>{setpassword(e.target.value)}}        />
          </div>
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <button  className="submit-btn" type="submit">Register</button>
    </form>
    </div>
    <div className='toster'>
    <ToastContainer/>
    </div>
    </>
  );
};

export default RegistrationForm;
