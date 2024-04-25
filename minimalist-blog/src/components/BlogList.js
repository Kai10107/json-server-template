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
          throw new Error('Something went wrong fetching posts.'); 
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

  return (
    <div>
      <h2>Blog Posts</h2>
      {isLoading && <p>Loading posts...</p>} {}
      {error && <p className="error-message">Error: {error}</p>} {}

      {!isLoading && !error && posts.length > 0 && ( 
        <ul>
          {posts.map(post => (
            <li key={post.id}> 
              <h3>{post.title}</h3> 
              <p>{post.content}</p> {}
            </li>
          ))}
        </ul>
      )}

      {!isLoading && !error && posts.length === 0 && ( 
        <p>No blog posts found.</p>
      )}
    </div>
  );
}

export default BlogList; 
