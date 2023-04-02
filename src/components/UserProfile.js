import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../customHook/useUser';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, posts] = useUser(userId);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3 className='username'>User Profile:</h3>
      <h4>User Name - {user?.name}</h4>
      <p className='email'>Email: {user?.email}</p>
      <p>Company: {user?.company.name}</p>
      <h4>Posts:</h4>
      {posts.map((post) => (
        <div key={post.id} className='postWrap'>
          <h5>Id Number:{post.id}</h5>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
