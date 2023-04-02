import { useState, useEffect } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError('Error fetching users data');
      });
  }, []);

  return [users, isLoading, error];
};

export default useUsers;
