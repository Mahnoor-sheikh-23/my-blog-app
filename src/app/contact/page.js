import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
                <h1 className="text-5xl font-bold mb-10">Get in Touch</h1>
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
                                <p className="text-gray-600">
                                    Feel free to get in touch via the form, or reach out using the following details.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">Address</h3>
                                <p className="text-gray-600">123 Blog Avenue, Web City, CodeLand</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">Email</h3>
                                <p className="text-gray-600">contact@blogsite.com</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium">Phone</h3>
                                <p className="text-gray-600">+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
