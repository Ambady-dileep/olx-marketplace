export const Input = ({ type, placeholder, name, error, register }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-3 border-2 border-black rounded-md mt-3"
        {...register(name)}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};
