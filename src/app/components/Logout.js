import React from 'react';

const LogoutButton = () => {
  const handleLogout = async () => {
    localStorage.removeItem('token');
  localStorage.removeItem('isAdmin'); // Remove isAdmin status
  window.location.href = '/login'; 
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
