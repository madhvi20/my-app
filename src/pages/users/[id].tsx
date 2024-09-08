import { GetServerSideProps } from 'next';
import axios from 'axios';
import Link from 'next/link';

const UserDetail = ({ user }: { user: any }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{user.username}</h1>
      <p>Phone: {user.phone}</p>
      <Link href={`/edit-user/${user.id}`} className="text-blue-500 underline">Edit User</Link>
    </div>
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

export default UserDetail;
