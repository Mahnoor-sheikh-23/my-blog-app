import React, { useState, useEffect } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && name.trim()) {
      const newCommentObj = { name, text: newComment };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment('');
      setName('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 mb-9 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Comments</h3>

      {/* Comment List */}
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-lg text-gray-700 shadow-sm"
          >
            <span className="font-semibold text-gray-900">{comment.name}</span>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mt-6 flex flex-col space-y-4">
        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />

        {/* Comment Textarea */}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none resize-none"
          rows="4"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="self-end bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
