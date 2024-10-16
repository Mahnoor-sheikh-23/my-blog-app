import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Articles = [
  {
    id: 1,
    title: " 4 Home Organization Ideas for Tidying Up Every Room",
    slug: "home-organization-ideas",
    img: "https://media.architecturaldigest.com/photos/5b2c1f6cadc14f7b2cbd7cea/16:9/w_2560%2Cc_limit/eliana-gil-rodriguez-home-01.jpg",
    para: " Invest in storage furniture, or consider color coding a collection."
  },
  {
    id: 2,
    title: "Top 4 New Technology Trends in 2024: Exploring the Future",
    slug: "new-technology-in-2024",
    img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
    para: "Unveiling Innovations and Advancements Shaping Our Future"
  },
  {
    id: 3,
    title: "Little Etiquette Rules Everyone Should Know",
    slug: "social-etiquette-rules-everyone-should-know",
    img: "https://thebritishschoolofexcellence.com/wp-content/uploads/Article-Size-Pictures-29.png",
    para: "Simple Manners and Politeness for Everyday Situations"
  },
  {
    id: 4,
    title: "What you need to know about accommodating special diets in meetings",
    slug: "accommodating-diets-in-meetings",
    img: "https://www.iacconline.org/wp-content/uploads/Dietary-needs-meetings-blog-report-featured-image-2048x1367.jpg",
    para: "Ensuring Inclusive and Considerate Dining for All Attendees"
  },
  {
    id: 5,
    title: "My Reading Goals and Progress Updates",
    slug: "reading-goals",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTt23fMBJFB3SFXgu0tIZgmkEp-iFmtO9IEw&s",
    para: "Visualizing My Journey"
  },

]

function Page() {
  return (
    <div className="px-4">
    <Header/>
      <h1 className='text-3xl sm:text-5xl justify-center mt-10 flex mb-14 font-serif underline'>Read Our Latest Posts</h1>
      {
        Articles.map(article => (
          <div key={article.id} className=' mt-6 mb-8 flex flex-col sm:flex-row w-full max-w-7xl mx-auto rounded-3xl bg-gray-200 p-4'>
            <Link key={article.id}
              href={`/article/${article.slug}`}
              className='sm:w-1/2 w-full'>
              <img
                src={article.img}
                className='rounded-2xl h-auto sm:h-[250px] w-full object-cover'
              />
            </Link>
            <div className='sm:w-1/2 w-full flex flex-col justify-center p-4'>
              <p className='text-2xl sm:text-3xl font-mono font-bold mb-2'>
                {article.title}
              </p>
              <p className='text-base sm:text-lg mb-4 font-mono'>
                {article.para}
              </p>
              <Link key={article.id}
                href={`/article/${article.slug}`}
                className='text-blue-600 underline'>
                Read More
              </Link>
            </div>
          </div>
        ))
      }
      <Footer/>
    </div>
  )
}

export default Page;
