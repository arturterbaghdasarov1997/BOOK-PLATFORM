import React, { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../data/books";
import './Book.css';

interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    rating: number,
    reviews: { id: number; content: string; reviewer: string }[];
}

const BookList: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate(); // Hook to handle navigation

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            setFilter(e.target.value);
        });
    };

    const handleViewDetails = (bookId: number) => {
        navigate(`/book/${bookId}`);
    };

    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(filter.toLowerCase()) ||
            book.author.toLowerCase().includes(filter.toLowerCase()) ||
            book.genre.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h2>Book List</h2>
            <input
                type="text"
                placeholder="Search by Title, Author or Genre"
                value={filter}
                onChange={handleFilterChange}
                style={{
                    padding: '10px',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '96.5%',
                    boxSizing: 'border-box',
                    marginBottom: '12px',
                    marginLeft: '40px',
                }}
            />
            {isPending && <p>Searching books. . .</p>}
            <ul>
                {filteredBooks.map((book: Book) => (
                    <div key={book.id} className="book">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <p>Rating: {book.rating}</p>
                        <button
                            onClick={() => handleViewDetails(book.id)}
                            style={{
                                padding: '10px 20px',
                                fontSize: '1rem',
                                color: '#fff',
                                backgroundColor: '#007bff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                marginTop: '10px'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default BookList;