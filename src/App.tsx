import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const DiscussionPage = lazy(() => import('./pages/DiscussionPage'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/discussion">Discussion</Link>
        </nav>

        <Suspense fallback={<div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:bookId" element={<BookPage />} />
            <Route path="/discussion" element={<DiscussionPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;