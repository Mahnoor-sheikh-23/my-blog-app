import React from 'react'

function Footer() {
  return (
    <div>
        <div className="h-[50vh] bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-400 mb-6">
            Follow us on social media and subscribe to our newsletter for the latest updates, articles, and exclusive content.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-indigo-400 hover:text-indigo-500">Facebook</a>
            <a href="#" className="text-indigo-400 hover:text-indigo-500">Twitter</a>
            <a href="#" className="text-indigo-400 hover:text-indigo-500">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
