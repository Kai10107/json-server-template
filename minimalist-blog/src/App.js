import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import NewPostForm from './NewPostForm';
import BlogPost from './BlogPost';
import BlogList from './BlogList';

function App() {
  return (
    <BrowserRouter> 
      <NavBar />  
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/posts/new" element={<NewPostForm />} /> 
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
