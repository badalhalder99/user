import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../customHook/useUsers';

const UsersList = () => {
  const [users, isLoading, error] = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 className='username'>All Users List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <h5>{user.name}</h5>
          </Link>
          <p className='email'>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
};
export default UsersList;
