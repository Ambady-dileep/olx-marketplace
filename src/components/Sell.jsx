import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdAddAPhoto } from 'react-icons/md';
import { productSchema } from '../utils/validation';
import { uploadProduct } from '../utils/uploadProduct';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const Sell = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const { currentUser } = useUser();
  const [isUploading, setisUploading] = useState(false);

  const onSubmit = async data => {
    setisUploading(true);
    console.log('Form Data:', data);
    const user = currentUser.displayName || 'unknown';
    const successs = await uploadProduct(data, user);
    successs && reset();
    setisUploading(false);
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-5 sm:p-10 pt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 w-[90%] sm:w-[50%] h-full flex flex-col rounded-lg shadow-2xl"
      >
        <h1 className="text-center font-bold text-2xl mb-2">
          Create a Product to Sell
        </h1>
        <input
          type="text"
          placeholder="Product Name"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-red-600 text-sm mx-auto">{errors.name.message}</p>
        )}
        <input
          type="number"
          placeholder="Price"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
          {...register('price', { valueAsNumber: true })}
        />
        {errors.price && (
          <p className="text-red-600 text-sm mx-auto">{errors.price.message}</p>
        )}
        <textarea
          rows="4"
          placeholder="Enter a Short Description"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
          {...register('description')}
        ></textarea>
        {errors.description && (
          <p className="text-red-600 text-sm mx-auto">
            {errors.description.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Address"
          className="px-2 py-3 border-1 border-black rounded-sm mt-5 w-[80%] mx-auto"
          {...register('address')}
        />
        {errors.address && (
          <p className="text-red-600 text-sm mx-auto">
            {errors.address.message}
          </p>
        )}
        <div className="file flex gap-2 w-[80%] mx-auto mt-5 items-center justify-center">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            <MdAddAPhoto className="text-xl" />
            <span className="">Upload </span>
          </label>
          <input
            id="file-upload"
            accept="image/*"
            type="file"
            className="sm:block hidden"
            {...register('file')}
          />
        </div>
        {errors.file && (
          <p className="text-red-600 text-sm mx-auto">{errors.file.message}</p>
        )}
        <button
          className="cursor-pointer px-2 py-3 bg-green-400 text-black mt-4 w-[80%] mx-auto rounded-sm "
          disabled={isUploading}
        >
          {isUploading ? (
            <FaSpinner className="mx-auto animate-spin" />
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default Sell;
