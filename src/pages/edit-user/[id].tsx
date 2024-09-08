import { GetServerSideProps } from 'next';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditUser = ({ user }: { user: any }) => {
  const { register, handleSubmit } = useForm({ defaultValues: user });
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await axios.patch(`http://localhost:3000/api/users/${user.id}`, data);
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update User</button>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await axios.get(`http://localhost:3000/api/users/${id}`);
  const user = res.data;

  return {
    props: {
      user,
    },
  };
};

export default EditUser;
