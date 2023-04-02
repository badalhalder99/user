import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import Error from './components/Error';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/users/:userId" element={<UserProfile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
export default App;
