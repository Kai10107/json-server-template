
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewPostForm from './components/NewPostForm';
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/posts/new" element={<NewPostForm />} />
            <Route path="/posts/:postId" element={<BlogPost />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 Your Blog Name</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
