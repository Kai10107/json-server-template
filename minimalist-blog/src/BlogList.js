import React, { useState, useEffect } from 'react';


function BlogList() {
  const [posts, setPosts] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPosts = async () => { 
      setIsLoading(true); 
      try {
        const response = await fetch('http://localhost:3000/posts');
        if (!response.ok) {
          throw new Error('Something went wrong...');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts(); 
  }, []); 

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>; 

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}> 
            {post.title} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList; 
