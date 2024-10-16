"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const { url } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    const allPosts = [
      {
        img1: "https://newbreak.church/wp-content/uploads/2024/06/t5yuohw6zro-1536x1024.jpg",
        heading: "You Are Under Construction",
        date: "June 10, 2024",
        content: `The phrase "under construction" often evokes images of buildings, websites, or projects that are in the process of being developed or improved. This concept extends beyond physical structures to
         include businesses, digital platforms, and even personal growth. Understanding what "under construction"
         means in various contexts can enhance audience engagement, improve customer experience, and fost
         er trust. Here’s a deeper look at why clear communication and transparency during periods of construction are essential.
         In the realm of physical construction, whether it’s a new office building, a public space, or a home renovation, clear signage and communication are crucial. When potential
         customers or visitors encounter a construction site, they may feel inconvenienced or confused. Providing clear information about what is being built, the timeline for completion, and the benefits of the project can help ease concerns.
          For example, if a local park is under construction, signage explaining the improvements—like new playground equipment or walking paths—can help the community appreciate the temporary disruption. Transparency
         about the project's progress and any changes to timelines can also help manage expectations and build goodwill among stakeholders.`,
        content2: `Similarly, in the digital world, websites often display “under construction” messages during maintenance or updates. For users, this can be frustrating if they are seeking information or services. Clear communication is key to retaining user trust during this downtime. Providing estimated completion times, highlighting what new features or improvements users can expect, and offering alternative resources or contact information can significantly enhance the user experience. This approach not only keeps users informed but also demonstrates that the organization values their time and engagement.In business, the concept of being “under construction” can refer to companies undergoing significant changes, such as restructuring, rebranding, or implementing new technologies. In these situations, clear and transparent communication is essential for maintaining employee morale and customer trust. Employees may feel anxious about job security during a merger or reorganization, and transparent updates about the process can alleviate uncertainty. For customers, communicating how changes will affect products or services can mitigate frustration and foster loyalty. By explaining the reasons behind changes and how they will ultimately benefit stakeholders, businesses can turn potential challenges into opportunities for growth.`,
        content3: `In conclusion, the concept of being “under construction” resonates in various contexts, from physical spaces to digital platforms, businesses, and personal growth. The key takeaway is the importance of clear communication and transparency throughout the process. By keeping stakeholders informed, managing expectations, and demonstrating the value of ongoing changes, organizations and individuals can build trust and foster positive relationships. Whether navigating a construction site, waiting for a website update, or experiencing personal growth, embracing the “under construction” mindset can lead to greater understanding and collaboration.`,
        url: "under-construction"
      },
      {
        img1: "https://images.squarespace-cdn.com/content/v1/5beb00a47e3c3abd688e43b4/1593156921416-I28S6Q0AHAUATNR703CE/better+sleep",
        heading: `
Tips for Better Sleep: Unlocking the Secrets to a Restful Night`,
        date: "July 22, 2024",
        content: "In today’s fast-paced world, getting a good night's sleep can often feel like a luxury rather than a necessity. Yet, quality sleep is crucial for our overall health, affecting everything from mood and productivity to physical well-being. If you find yourself tossing and turning at night, it might be time to reassess your sleep habits. Here are some effective tips to help you achieve the restful sleep you deserve.One of the most effective ways to improve your sleep quality is by establishing a consistent sleep schedule. Try to go to bed and wake up at the same time every day, even on weekends. This helps regulate your body’s internal clock, making it easier to fall asleep and wake up naturally. Aim for 7-9 hours of sleep each night. The more regular your schedule, the better your body can adapt, leading to improved sleep quality over time.",
        content2 : `Your bedtime routine plays a crucial role in signaling to your body that it’s time to wind down. Establish calming pre-sleep activities to help you relax. This could include reading a book, taking a warm bath, or practicing gentle yoga or meditation. Avoid stimulating activities, such as watching TV or scrolling through your phone, at least an hour before bed. By creating a peaceful environment,
         you can prepare your mind and body for restful sleep.`,
         content3 : `Lastly, consider incorporating elements into your bedroom that promote relaxation. Soft lighting, pleasant scents (like lavender), and comfortable bedding can enhance your sleep environment. Personal touches that create a serene atmosphere can help you unwind and signal to your body that it’s time to rest.

In conclusion, achieving better sleep is within your reach. By implementing these tips, you can create a healthier sleep routine and improve the quality of your rest. Remember, quality sleep is essential for overall well-being, so prioritize it in your life and enjoy the benefits of a restful night.`,
        url: "tips-for-better-sleep"
      },
      {
        img1: "https://miro.medium.com/v2/resize:fit:920/0*QH0tapu5fvN3h7aT.png",
        heading: "Financial News and Its Impact on Your Audience",
        date: "May 19, 2024",
        content: `In an increasingly interconnected world, financial news plays a crucial role in shaping individual and collective economic decisions
          From fluctuations in stock prices to shifts in interest rates, the financial landscape is constantly evolving, and understanding these changes is vital for everyone—from seasoned
           investors to everyday consumers. As financial news unfolds, it can have significant implications for your audience, influencing 
           their financial well-being, investment strategies, and overall economic outlook.
           One of the most immediate ways financial news impacts the audience is through its effect on the stock market. News reports about
            corporate earnings, economic indicators, or geopolitical events can lead to rapid changes in stock prices. For instance, a positive
             earnings report from a major corporation might drive stock prices up, encouraging investors to buy, while negative news can lead to 
             sell-offs. For your audience, particularly those who invest in stocks or retirement accounts, staying updated on financial news can help them make informed decisions
            about buying or selling assets, thus directly affecting their financial health.`,
        content2: `Another significant area where financial news impacts your audience is through employment and economic growth. Economic indicators such as unemployment rates, GDP growth, and consumer spending figures provide insights into the overall health of the economy. Positive news regarding job creation or economic growth can boost consumer confidence, encouraging spending and investment. Conversely, news about rising unemployment or a recession can lead to uncertainty and caution among consumers. For your audience, staying informed about these trends can help them navigate their career choices, job security, and financial planning.
Additionally, the global economy is more interconnected than ever, meaning that financial news from one part of the world can ripple through to other regions, affecting local markets and consumers. For instance, news about trade agreements, tariffs, or international conflicts can influence everything from the prices of goods to the availability of jobs. For your audience, understanding the global economic landscape is crucial, as it can impact their cost of living, job opportunities, and investment choices.
Finally, financial news also plays a vital role in shaping public policy and regulation. Government decisions regarding taxes, social welfare programs, and financial regulations can have long-lasting effects on individual finances. For example, changes in tax policy can influence disposable income and savings rates, while new regulations can affect investment opportunities. Your audience must remain aware of these developments, as they can directly impact their financial strategies and long-term planning.
`,
        content3: `In conclusion, financial news is not just for Wall Street investors; it affects everyone in various ways. By staying informed about the latest developments in the financial world, your audience can make better decisions that impact their personal finances, investments, and overall economic well-being. Whether it’s understanding stock market trends, adapting to changing interest rates, or responding to economic indicators, the ability to navigate financial news is essential in today’s fast-paced world. Encouraging your audience to stay updated and informed will empower them to take charge of their financial futures and make decisions that align with their personal and financial goals.`,
        url: "financial-post"
      }
    ];

    if (url) {
      const foundPost = allPosts.find(post => post.url === url);
      setPost(foundPost);
    }
  }, [url]);

  // If post is not yet loaded, show a loading message
  if (!post) {
    return <div className='flex justify-center text-4xl'>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={post.img1}
          alt={post.heading}
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mt-6">{post.heading}</h1>
          <p className="text-lg mt-2 text-gray-600">{post.date}</p>
          <div className="mt-4 text-gray-700">
            <p className="text-xl sm:text-2xl leading-relaxed">{post.content}</p>
          </div>
          <br />
          <div className="mt-4 text-gray-700">
            <p className="text-xl sm:text-2xl leading-relaxed">{post.content2}</p>
          </div>
          <br />
          <div className="mt-4 text-gray-700">
            <p className="text-xl sm:text-2xl leading-relaxed">{post.content3}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
         Go Back
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
