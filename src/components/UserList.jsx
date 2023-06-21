import React, { useState } from 'react';
import User from './User';

const UserList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const paginatedUsers = users.slice(startIndex, endIndex);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {paginatedUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}

      <nav className="flex items-center justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn-primary p-2 px-4 rounded hover:text-secondary mr-2"
        >
          <i className="bx bx-chevron-left"></i>
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= users.length}
          className="btn-primary p-2 px-4 rounded hover:text-secondary"
        >
          <i className="bx bx-chevron-right"></i>
        </button>
      </nav>
    </section>
  );
};

export default UserList;
