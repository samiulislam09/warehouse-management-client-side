import { async } from '@firebase/util';
import React from 'react'
import { ToastContainer } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';


function RequireAuth({children}) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification] = useSendEmailVerification(auth)
    
    const emailVerificationHandler = async()=>{
      await sendEmailVerification();
      toast('Sent mail')
    }
    if(loading){
      return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified){
      return <div className='text-center my-5'>
        <h3 className='text-danger'>Your emIl is not verified</h3>
        <h5 className='text-success'>PLease verify your email address</h5>
        <button className='btn btn-primary' onClick={emailVerificationHandler}>send again</button>
        <ToastContainer></ToastContainer>
      </div>
    } 
  return children;
}

export default RequireAuth
