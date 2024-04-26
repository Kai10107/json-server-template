import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { postId } = useParams(); 

  const useParams = require('react-router-dom').useParams; 

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {

        const response = await fetch(`http://localhost:3001/posts/${postId}`);

        if (!response.ok) {
          throw new Error('Something went wrong fetching the post.');
        }

        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      <h2>Blog Post</h2>

      {isLoading && <p>Loading post...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {post && (
        <div>
          <h3>{post.title}</h3>
          <p className="post-date">Posted on: {post.date}</p>
          {post.author && <p>By: {post.author}</p>} 
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
}

export default BlogPost; 
