import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { toast } from 'react-toastify';

export const signupUser = async (name, email, password) => {
  try {
    const userCredintials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredintials.user;
    await updateProfile(user, {
      displayName: name,
    });
    await user.reload();
    console.log('signup', user);
  } catch (error) {
    console.log('Error in signup', error.message);
  }
};

export const signinUser = async (email, password) => {
  try {
    const userCredintials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredintials.user;
  } catch (error) {
    toast.error('Invalid Credintials');
    console.log('Error in Sign in', error.message);
  }
};

export const logout = () => signOut(auth);
