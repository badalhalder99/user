import { useState, useEffect } from 'react';

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('user data:', data);
        setIsLoading(false);
        setUser(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError('Error fetching user data');
      });

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        setError('Error fetching posts data');
      });
  }, [userId]);

  console.log('user:', user);
  console.log('posts:', posts);

  return [user, posts, isLoading, error];
};

export default useUser;
