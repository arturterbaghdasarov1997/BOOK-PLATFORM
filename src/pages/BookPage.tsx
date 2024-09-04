import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import './BookPage.css';

const BookPage: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();

  const parsedBookId = bookId ? parseInt(bookId) : null;

  return (
    <div className="book-page">
      <h1>Book Details</h1>
      {parsedBookId !== null ? (
        <BookDetail bookId={parsedBookId} />
      ) : (
        <p className="error-message">Book ID is missing or invalid.</p>
      )}
    </div>
  );
};

export default BookPage;