import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateUser = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await axios.post('http://localhost:3000/api/users', data);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <label className="block mb-2">
        Username:
        <input {...register('username')} className="border rounded px-2 py-1" />
      </label>
      <label className="block mb-2">
        Phone:
        <input {...register('phone')} className="border rounded px-2 py-1" />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create User</button>
    </form>
  );
};

export default CreateUser;
