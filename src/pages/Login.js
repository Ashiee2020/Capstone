import React from 'react';
import { facebooklogo, googlelogo, twitterlogo} from "../assets";
import {
    GoogleAuthProvider,
    TwitterAuthProvider,
    FacebookAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/nestSlice';
import { useNavigate } from 'react-router-dom';

const AuthComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
  
    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          dispatch(
            addUser({
              _id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          navigate('/');
        })
        .catch((error) => {
          // Handle error if needed
        });
    };
  
    const handleTwitterLogin = () => {
      signInWithPopup(auth, twitterProvider)
        .then((result) => {
          const user = result.user;
          dispatch(
            addUser({
              _id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          navigate('/');
        })
        .catch((error) => {
          // Handle error if needed
        });
    };
     
    const handleFacebookLogin = () => {
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          const user = result.user;
          dispatch(
            addUser({
              _id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.photoURL,
            })
          );
          navigate('/');
        })
        .catch((error) => {
          // Handle error if needed
        });
    };
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-Out successful.
                toast.success("Signed Out Successfully");
                dispatch(removeUser());
            })
            .catch((error) => {
                console.Log(error);
            });
    };

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-400
            cursor-pointer duration-300'>
                <img className='w-8' src={googlelogo} alt='googlelogo' />
                <span className='text-sm text-gray-900'> Sign in with Google</span>
            </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-blue-400 duration-300'>
                Sign Out
            </button>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleFacebookLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-400
            cursor-pointer duration-300'>
                <img className='w-8' src={facebooklogo} alt='facebooklogo' />
                <span className='text-sm text-gray-900'> Sign in with Facebook</span>
            </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-blue-400 duration-300'>
                Sign Out
            </button>
        </div>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleTwitterLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-400
            cursor-pointer duration-300'>
                <img className='w-8' src={twitterlogo} alt='twitterlogo' />
                <span className='text-sm text-gray-900'> Sign in with X</span>
            </div>
            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide
            rounded-md hover:bg-blue-400 duration-300'>
                Sign Out
            </button>
        </div>
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
        />
    </div>
  );
};

export default AuthComponent;