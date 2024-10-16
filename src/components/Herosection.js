import React from 'react';
import Link from 'next/link';
function Herosection() {
  const allCard = [
    {
      img1: "https://newbreak.church/wp-content/uploads/2024/06/t5yuohw6zro-1536x1024.jpg",
      heading: "You Are Under Construction",
      date: "June 10, 2024",
      readmore: "VIEW THESE RESOURCES",
      url: "under-construction"
    },
    {
      img1: "https://images.squarespace-cdn.com/content/v1/5beb00a47e3c3abd688e43b4/1593156921416-I28S6Q0AHAUATNR703CE/better+sleep",
      heading: "Tips for Better Sleep",
      date: "June 10, 2024",
      readmore: "VIEW THESE RESOURCES",
      url: "tips-for-better-sleep"
    },
    {
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgqXrniMPPmeSO91zIAY88Ay-fzkDgae27g&s",
      heading: "Financial News and Its Impact on Your Audience",
      date: "May 19, 2024",
      readmore: "VIEW THESE RESOURCES",
      url: "financial-post"
    }
  ]
  return (
    <div>
      <div className="overflow-x-hidden">
        {/* Hero Image */}
        <div>
          <img
            src="https://english.columbian.gwu.edu/sites/g/files/zaxdzs4551/files/2022-03/read-our-blog.jpg"
            className="w-full h-[200px] sm:h-[350px] object-cover mt-11"
          />
        </div>
        {/* Title Section */}
        <div className="mt-12 sm:mt-32">
          <h1 className="text-2xl sm:text-4xl p-4 sm:p-8 font-bold">
            Weekly Articles with insight into the weekends message
          </h1>
        </div>
        {/* Subtitle Section */}
        <div className="mt-2 mb-9">
          <h1 className="text-lg sm:text-2xl p-4 sm:p-8">
            Our blog takes the message from the weekend and lays out next right steps, so you can hear a message and do a message in practical ways.
          </h1>
        </div>
        {/* Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-16 mb-9">
          {allCard.map(card => (
            <div key={card.id} className="h-auto bg-gray-100 border border-spacing-3 border-blue-900 p-4">
              <img
                src={card.img1}
                className="h-[200px] sm:h-[300px] w-full object-cover cursor-pointer"
              />
              <p className="text-xl sm:text-2xl font-bold pt-4">{card.heading}</p>
              <p className="pt-2 pb-4">{card.date}</p>
              <Link key={card.url} href={`/blogs/${card.url}`} className="text-blue-800 font-bold">VIEW THESE RESOURCES</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
