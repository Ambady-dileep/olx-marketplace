import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import { loginSchema, signupSchema } from '../../utils/validation';
import { Input } from './Input';
import { signinUser, signupUser } from '../../utils/authentication';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const Login = () => {
  const [form, setForm] = useState('Sign In');
  const schema = form == 'Sign Up' ? signupSchema : loginSchema;
  const [isLoading, setisLoading] = useState(false);
  const { currentUser } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) navigate('/');
  }, [currentUser]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  async function onSubmit(data) {
    setisLoading(true);
    const { name, email, password } = data;
    if (form == 'Sign Up') {
      await signupUser(name, email, password);
      console.log('sign Up', data);
    } else {
      await signinUser(email, password);
      console.log('sign In', data);
    }
    setisLoading(false);
  }
  function handleSwitch() {
    setForm(form == 'Sign Up' ? 'Sign In' : 'Sign Up');
    reset();
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="form sm:w-[40%] p-10 pt-0 flex flex-col justify-center items-center shadow-2xl rounded-sm">
        <img
          src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
          alt=""
          className="w-[100px]"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[90%]"
        >
          {form == 'Sign Up' && (
            <Input
              placeholder="Your Name"
              type="text"
              name="name"
              error={errors.name}
              register={register}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            error={errors.email}
            register={register}
          />
          <Input
            type="password"
            placeholder="******"
            name="password"
            error={errors.password}
            register={register}
          />
          {form == 'Sign Up' && (
            <Input
              type="password"
              placeholder="******"
              name="confirmPassword"
              error={errors.confirmPassword}
              register={register}
            />
          )}
          <button
            type="submit"
            className="bg-blue-400 text-black px-3 py-3 text-lg font-bold mt-5 mb-3 cursor-pointer"
          >
            {isLoading ? <FaSpinner className="mx-auto animate-spin" /> : form}
          </button>
        </form>
        <p className="text-gray-500">
          {form == 'Sign Up'
            ? 'Already Have Account?'
            : `Don't have an account ?`}
          <span
            className="ml-3 cursor-pointer text-black underline"
            onClick={handleSwitch}
          >
            {form == 'Sign Up' ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
