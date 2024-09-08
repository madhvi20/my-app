// src/pages/index.tsx
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  phone: string;
}

interface Props {
  users: User[];
}

const Home: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/users');
    const users = res.data;

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Home;
