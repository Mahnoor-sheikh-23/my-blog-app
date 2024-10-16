import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-[200vh]">
    <Header/>
      {/* Hero Section */}
      <div className="h-[100vh] bg-cover bg-center flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366')]">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-white">
          <h1 className="text-6xl font-extrabold mb-6">About Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover stories, insights, and trends across various topics including technology, lifestyle, and more. Join us on this journey of knowledge and inspiration.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="h-[50vh] bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is to provide well-researched, valuable, and inspiring content to help our readers stay informed and engaged. We are passionate about sharing fresh perspectives and bringing the latest trends right to your screen.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="h-[50vh] bg-white flex items-center justify-center">
        <div className="text-center p-8 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet the Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our dedicated team of writers and creators works hard to bring you content that matters. From tech experts to lifestyle enthusiasts, we have a diverse group of individuals who love sharing knowledge with the world.
          </p>
          
        </div>
      </div>

      {/* Footer Section */}
   <Footer/>
    </div>
  );
};

export default About;

