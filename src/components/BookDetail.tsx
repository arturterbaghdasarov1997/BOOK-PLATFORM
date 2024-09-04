import React from "react";
import { books } from "../data/books";
import ReviewList from "./ReviewList";

interface BookDetailProps {
    bookId: number;
};

const BookDetail: React.FC<BookDetailProps> = ({ bookId }) => {
    const book = books.find((book) => book.id === bookId);

    if (!book) return <p>Book not found</p>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <ReviewList reviews={book.reviews} />
        </div>
    );
};

export default BookDetail;