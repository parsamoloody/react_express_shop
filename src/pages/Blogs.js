
import React, { useState, useEffect } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      content: 'React is a powerful JavaScript library for building user interfaces...',
      author: 'John Doe',
      date: '2023-12-01'
    },
    {
      id: 2, 
      title: 'Web Development Best Practices',
      content: 'Learn the essential practices for modern web development...',
      author: 'Jane Smith',
      date: '2023-12-02'
    }
  ];
 
  useEffect(() => {
    setBlogs(blogPosts);
  }, []);

  return (
    <div className="px-8 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Our Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {blogs.map(blog => (
          <div 
            key={blog.id} 
            className="bg-white rounded-lg p-6 shadow-md hover:-translate-y-1 transition-transform duration-200 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
