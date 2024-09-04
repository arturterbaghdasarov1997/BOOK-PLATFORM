import React from "react";
import BookList from "../components/BookList";
import EmailForm from "../components/EmailForm";
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Book Club Platform</h1>
            <BookList />
            <div className="email-form">
                <EmailForm />
            </div>
        </div>
    );
};

export default HomePage;