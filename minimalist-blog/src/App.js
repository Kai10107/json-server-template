import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <NavBar /> {} 
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/posts/new" element={<NewPostForm />} /> 
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}