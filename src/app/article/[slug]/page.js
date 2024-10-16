"use client";
import CommentSection from '@/components/CommentSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useParams } from 'next/navigation';

const articleData = {
    'home-organization-ideas': {
        title: '4 Home Organization Ideas for Tidying Up Every Room',
        content: 'Invest in storage furniture, or consider color coding a collection.',
        subcontent: "As a society, we're obsessed with organizing—and there are plenty of psychological reasons that point to why. If you're in the process of organizing a new place or reorganizing your longtime abode, it can be tough to figure out the best way to do it in each space. Luckily, there are more than enough organization hacks and products that can be used in various rooms throughout your home. From using baskets in different sizes to color coding a collection, these designer-approved home organization ideas are reliable. Each one will take you a step closer to having the neat and tidy home of your dreams.",
        img: "https://media.architecturaldigest.com/photos/5b2c1f6cadc14f7b2cbd7cea/16:9/w_2560%2Cc_limit/eliana-gil-rodriguez-home-01.jpg",
        img1: "https://hips.hearstapps.com/hmg-prod/images/home-organization-ideas-living-room-1674067477.jpg?crop=0.959xw:0.968xh;0.00411xw,0.0235xh&resize=980:*",
        img2: "https://hips.hearstapps.com/hmg-prod/images/home-organization-ideas-1674061391.png?crop=0.813xw:0.813xh;0.187xw,0&resize=980:*",
        img3: "https://hips.hearstapps.com/hmg-prod/images/home-organization-ideas-dining-room-1674062812.png?crop=0.9995828118481435xw:1xh;center,top&resize=980:*",
        img4: "https://hips.hearstapps.com/hmg-prod/images/home-organization-ideas-baskets-1674069111.jpg?crop=0.998003992015968xw:1xh;center,top&resize=980:*",
        heading1: "Focus on Storage Furniture",
        heading2: "Showcase Matching Jars and Labels",
        heading3: "Use Wall Niches",
        heading4: "Add Baskets",
        para1: "Be smart with your furniture by buying items that offer storage capabilities. This way, you'll have less clutter to organize, and you'll be able to easily access your items. Consider everything from an ottoman or a coffee table for storing blankets to a credenza for hiding board games and books.",
        para2: "Create a cohesive look in your kitchen or pantry by organizing spices and cooking ingredients into matching jars. Add cute labels to ensure you don't mix anything up.",
        para3: "Forgo a bulky china cabinet in favor of dining room wall niches for displaying your favorite dinnerware in an orderly fashion. Take the concept to other areas of your home, like a reading nook for holding books or a breakfast area for kitchen decorating.",
        para4: "Baskets never fail to help instantly organize a space. Here, Romanek Design Studio used a large black basket as a laundry hamper. Larger baskets are also great for stowing blankets, pillows, and toys. Use small baskets to organize food in your pantry, linens in your laundry room, or office essentials by your desk.",

    },
    'new-technology-in-2024': {
        img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
        title: 'Top 4 New Technology Trends in 2024: Exploring the Future',
        content: 'Unveiling Innovations and Advancements Shaping Our Future',
        heading1: "AI-Generated Content",
        heading2: " Quantum Computing",
        heading3: "5G Expansion",
        heading4: "Internet of Things (IoT) in Smart Cities",
        para1: "Artificial intelligence can generate high-quality, creative content, including text, images, videos, and music. This technology uses algorithms like GPT (Generative Pre-trained Transformer) and DALL-E to understand and produce content that resonates with human preferences. The vast applications range from generating articles, creating educational materials, and developing marketing campaigns to composing music and producing realistic visuals. This speeds up content creation and reduces costs, and democratizes access to creative tools, enabling small businesses and individuals to create content at scale.",
        para2: "Quantum computers leverage the properties of quantum mechanics to process information exponentially faster than classical computers for specific tasks. This year, we're seeing quantum computing being applied in areas such as cryptography, where it can potentially crack currently considered secure codes, and in drug discovery, speeding up the process by accurately simulating molecular structures. The technology is still nascent but poised to revolutionize industries by solving complex problems intractable for traditional computers.",
        para3: "The fifth generation of mobile networks, 5G, promises significantly faster data download and upload speeds, wider coverage, and more stable connections. The expansion of 5G is facilitating transformative technologies like IoT, augmented reality, and autonomous vehicles by providing the high-speed, low-latency connections they require. This technology is crucial for enabling real-time communications and processing large amounts of data with minimal delay, thereby supporting a new wave of technological innovation.",
        para4: "IoT technology in smart cities involves the integration of various sensors and devices that collect data to manage assets, resources, and services efficiently. This includes monitoring traffic and public transport to reduce congestion, using smart grids to optimize energy use, and implementing connected systems for public safety and emergency services. As cities continue to grow, IoT helps manage complexities and improve the living conditions of residents.",

    },
    'social-etiquette-rules-everyone-should-know': {
        img: "https://thebritishschoolofexcellence.com/wp-content/uploads/Article-Size-Pictures-29.png",
        title: 'Little Etiquette Rules Everyone Should Know',
        content: 'Simple Manners and Politeness for Everyday Situations',
        subcontent: "Etiquette doesn’t have to be complicated. Good etiquette is all about making people feel comfortable and helping you navigate any situation smoothly. At The British School of Excellence, we like to compare the rules of etiquette to the traffic lights of human interaction. They guide us through tricky encounters and stop us from crashing into one another (metaphorically speaking of course!).",
        img1: "https://blog.petpooja.com/wp-content/uploads/2022/07/HERO_Dine_Out_Corona_Etiquette_GettyImages-1216220355.jpg",
        img2: "https://cdn.slidesharecdn.com/ss_thumbnails/dining-etiquette-ppt-160122081128-thumbnail.jpg?width=640&height=640&fit=bounds",
        img3: "https://assets.entrepreneur.com/content/3x2/2000/20181031175613-shutterstock-296302733.jpeg",
        img4: "https://thumbs.dreamstime.com/b/no-cell-phone-sign-white-background-46170628.jpg",
        heading1: "Why is etiquette important?",
        heading2: "Dining Etiquette",
        heading3: "Communication Skills ",
        heading4: "Put your phone away",
        para1: "Etiquette is important because it establishes a set of social norms and expectations that help individuals interact with each other in a respectful, considerate, and appropriate manner.Etiquette provides a framework for courteous and respectful behaviour, which can help prevent misunderstandings, conflicts, and social awkwardness. It also creates a sense of decorum and professionalism in social and professional settings.Having good etiquette shows respect for others and their cultures, values, and beliefs. By being mindful of others’ feelings, beliefs, and expectations, we can create more positive and harmonious relationships.",
        para2: "Dining etiquette refers to the set of rules and manners followed while eating in formal or informal settings. It includes using utensils correctly, chewing quietly, and waiting for everyone to be served before starting a meal. Proper posture, passing food to the right, and saying 'please' and 'thank you' when asking for items are important. It's polite to take small bites, avoid talking with a full mouth, and keep elbows off the table. Additionally, in some cultures, it's considered respectful to leave a little food on the plate, while in others, finishing everything is a sign of appreciation.",
        para3: "Good communication is the foundation of effective relationships, whether personal or professional. It involves clearly expressing your thoughts, actively listening to others, and responding thoughtfully. Key aspects of good communication include maintaining eye contact, using appropriate body language, and being mindful of tone and word choice. It’s important to be open, honest, and respectful, avoiding interruptions and ensuring that the message is understood by all parties. Empathy and patience also play a significant role, as they help in understanding different perspectives and fostering trust in conversations.",
        para4: "'Put your phone away' is a simple yet important reminder of modern etiquette. In social, professional, or dining settings, keeping your phone out of sight shows respect for those around you. It signals that you are present, attentive, and engaged in the moment. Constantly checking your phone can be distracting and may come across as rude or dismissive. By putting your phone away, you contribute to more meaningful interactions, foster better connections, and show that you value the time and attention of others.",

    },
    'accommodating-diets-in-meetings': {
        img: "https://www.iacconline.org/wp-content/uploads/Dietary-needs-meetings-blog-report-featured-image-2048x1367.jpg",
        title: 'What you need to know about accommodating special diets in meetings',
        content: 'Ensuring Inclusive and Considerate Dining for All Attendees',
        img1: "https://s31606.pcdn.co/wp-content/uploads/2023/04/shutterstock_2148892615.jpg",
        img2: "https://iacconline.org/wp-content/uploads/waiter-food20service-scaled.jpeg",
        img3: "https://miro.medium.com/v2/resize:fit:1400/0*aWX56_JPFnTQp4dd",
        img4: "https://iacconline.org/wp-content/uploads/shrimp20-food-nutrition-allergies-scaled.jpeg",
        heading1: " Creative Menu Planning for Inclusivity",
        heading2: "Keep a close check on the day",
        heading3: " Importance of Communication with Attendees",
        heading4: "Collaborating with Catering Services",
        para1: "Creating a menu that caters to a wide range of dietary needs doesn’t mean sacrificing variety or flavor. By including plant-based proteins, gluten-free grains, and non-dairy alternatives, you can ensure that the menu has something for everyone. It’s important to make these options just as flavorful and filling as the rest of the menu to avoid making dietary-friendly dishes feel like an afterthought. Thoughtful, inclusive menu planning adds value to the event and allows everyone to enjoy the food. This approach also shows that you care about the well-being of all attendees, enhancing their overall experience.",
        para2: "Be sure to ask guests if they have any special dietary requirements not covered by the food on offer during the meeting. Ensure that all food (be it plated, buffet style, silver service or snacks) clearly highlights relevant dietary information and any allergen contents. Make sure that wait staff are informed of guests with special dietary needs and briefed about their menu choices.",
        para3: "One of the most effective ways to accommodate dietary needs is through direct communication with attendees before the event. Sending out surveys or asking about dietary preferences during the RSVP process helps identify any special requirements in advance. This prevents any last-minute confusion and ensures that all participants feel heard and included. When people see that their needs have been acknowledged and addressed, it enhances their experience and allows them to focus on the purpose of the meeting without worrying about food. Clear communication also helps in planning an appropriate menu and eliminates unnecessary guesswork.",
        para4: "Collaborating closely with catering services is essential for successfully accommodating special diets. Choose a caterer that is experienced in providing a variety of meal options, such as gluten-free, vegan, or allergy-conscious dishes. Make sure to discuss how food will be prepared to avoid cross-contamination, especially for those with severe allergies. Additionally, labeling dishes with clear information about ingredients and allergens is critical, so attendees can easily identify what’s safe for them to eat. Working with a catering service that understands these requirements can elevate the experience for attendees and ensure that no one is left out due to dietary restrictions.",

    },
    'reading-goals': {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTt23fMBJFB3SFXgu0tIZgmkEp-iFmtO9IEw&s",
        title: 'My Reading Goals and Progress Updates',
        content: 'Visualizing My Journey',
        subcontent: "Reading has been an enriching experience, one that has expanded my mind and soul. Whether it’s exploring new genres, joining a book club, or simply finding time amidst a busy schedule, my reading journey has taught me the value of continuous learning. I’m excited to see where this path takes me next, and I encourage everyone to set their own reading goals, however big or small.",
        img1: "https://s31606.pcdn.co/wp-content/uploads/2023/04/shutterstock_2148892615.jpg",
        img2: "https://iacconline.org/wp-content/uploads/waiter-food20service-scaled.jpeg",
        img3: "https://miro.medium.com/v2/resize:fit:1400/0*aWX56_JPFnTQp4dd",
        img4: "https://iacconline.org/wp-content/uploads/shrimp20-food-nutrition-allergies-scaled.jpeg",
        heading1: "Read at least 12 books in a year",
        heading2: "Diversify my reading genres",
        heading3: "Enhance my understanding of non-fiction",
        heading4: "Join a book club or community",
        happy: "Happy reading!",
        para1: "I set out to read at least one book per month. This number might seem modest to some, but for me, it was an achievable target. Given my busy schedule, I wanted to ensure that reading didn’t feel like a chore but something I looked forward to each month.",
        para2: "My typical reading list consisted of fiction, primarily novels, but I wanted to expand my horizons. This year, I set the goal of exploring a variety of genres including self-help, historical fiction, science fiction, biographies, and even poetry. The idea was to step outside my comfort zone and gain a more comprehensive perspective on different topics.",
        para3: "As someone who loves storytelling, I realized that I often neglected non-fiction. This year, I aimed to strike a balance between fiction and non-fiction by incorporating books on personal development, psychology, and history to broaden my knowledge base.",
        para4: "Reading is often considered a solitary activity, but I believe that sharing and discussing books with others can provide deeper insights. One of my goals was to join a local or online book club where I could engage in discussions, exchange perspectives, and be introduced to new authors.",

    },
};

export default function ArticleDetail() {
    const { slug } = useParams();
    const article = articleData[slug];
    if (!article) {
        return <p>Article not found!</p>;
    }
    return (
        // <div>
        //     <Header />
        //     <div className='w-full md:w-[800px] mx-auto mt-8 px-4'>
        //         <h1 className='text-3xl md:text-5xl text-center'>{article.title}</h1>
        //         <p className='text-xl md:text-3xl mb-4 mt-9 text-center'>{article.content}</p>
        //     </div>
        //     <div className='bg-gray-200'>
        //         <img
        //             src={article.img}
        //             className='w-full md:w-[1300px] h-auto md:h-[490px] mx-auto pt-5 pb-6'
        //             alt="Article"
        //         />
        //     </div>
        //     {/* actual data start from here */}
        //     <p className='mt-7 text-lg md:text-2xl text-center px-4'>{article.subcontent}</p>
        //     <div className="w-full md:w-[1100px] mx-auto px-4">
        //         <div className='mt-10 flex flex-col items-center'>
        //             <div className='flex flex-col items-center mb-10'>
        //                 <h1 className='text-2xl md:text-3xl font-serif'>{article.heading1}</h1>
        //                 <p className='text-base md:text-xl mt-4'>{article.para1}</p>
        //             </div>
        //             <div className='flex flex-col items-center mb-10'>
        //                 <h1 className='text-2xl md:text-3xl font-serif'>{article.heading2}</h1>
        //                 <p className='text-base md:text-xl mt-4'>{article.para2}</p>
        //             </div>
        //             <div className='flex flex-col items-center mb-10'>
        //                 <h1 className='text-2xl md:text-3xl font-serif'>{article.heading3}</h1>
        //                 <p className='text-base md:text-xl mt-4'>{article.para3}</p>
        //             </div>
        //             <div className='flex flex-col items-center mb-16'>
        //                 <h1 className='text-2xl md:text-3xl font-serif'>{article.heading4}</h1>
        //                 <p className='text-base md:text-xl mt-4'>{article.para4}</p>
        //             </div>
        //         </div>
        //     </div>

        //     <CommentSection />
        //     <Footer />
        // </div>
        <div>
            <Header />
            <div className='w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] mx-auto mt-8 px-4'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center'>
                    {article.title}
                </h1>
                <p className='text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4 mt-9 text-center'>
                    {article.content}
                </p>
            </div>

            <div className='bg-gray-200'>
                <img
                    src={article.img}
                    className='w-full sm:w-[800px] md:w-[1300px] lg:w-[1500px] h-auto md:h-[490px] lg:h-[600px] mx-auto pt-5 pb-6'
                    alt="Article"
                />
            </div>

            {/* actual data start from here */}
            <p className='mt-7 text-base sm:text-lg md:text-2xl lg:text-3xl text-center px-4'>
                {article.subcontent}
            </p>

            <div className='w-full sm:w-[700px] md:w-[1100px] lg:w-[1400px] mx-auto px-4'>
                <div className='mt-10 flex flex-col items-center'>
                    <div className='flex flex-col items-center mb-10'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif'>
                            {article.heading1}
                        </h1>
                        <p className='text-sm sm:text-base md:text-xl lg:text-2xl mt-4'>
                            {article.para1}
                        </p>
                    </div>

                    <div className='flex flex-col items-center mb-10'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif'>
                            {article.heading2}
                        </h1>
                        <p className='text-sm sm:text-base md:text-xl lg:text-2xl mt-4'>
                            {article.para2}
                        </p>
                    </div>

                    <div className='flex flex-col items-center mb-10'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif'>
                            {article.heading3}
                        </h1>
                        <p className='text-sm sm:text-base md:text-xl lg:text-2xl mt-4'>
                            {article.para3}
                        </p>
                    </div>

                    <div className='flex flex-col items-center mb-16'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif'>
                            {article.heading4}
                        </h1>
                        <p className='text-sm sm:text-base md:text-xl lg:text-2xl mt-4'>
                            {article.para4}
                        </p>
                    </div>
                </div>
            </div>
            <CommentSection />
            <Footer />
        </div>


    );
}
