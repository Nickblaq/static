import { useState } from "react";
import Link from "next/link";
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      


      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const Faq = () => {
    return (
      <div>
        {/* FIRST!!! */}

        <section>
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="/sold-out-banner.jpg"
          alt="Man using a computer"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Promote your NFT Project &apos; Rest Assured</h2>

        <p className="mt-4 text-gray-600">
        Every Artist has a dream to sell out on the minute its launched. We are a dedicated team who will look after your promotions to get the best outcomes and help our clients to achieve the goals of reaching the maximum audience. Creating difference, which will be valued towards the promoter&apos;s interest and building strong connections in the NFT world.
We make sure to reach the number of users and create a echos of your project and show its importance.
        </p>

      <div className="flex flex-col md:flex-row md:justify-evenly items-center">
        <button 
          className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-300 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        >
          <span className="text-sm font-medium">Coming soon</span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
        </button>
        <a
        rel="noopener noreferrer"
        target="_blank"
          className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-600 border border-blue-300  rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="https://fortune.com/2022/02/28/what-are-nft-whitelists-and-how-to-get-on-one/"
        >
          <span className="text-sm font-medium"> Learn More</span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
        </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SECOND!!! */}

      <section className="text-white bg-gray-900">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Why kickstart your marketing upcoming Event with Pisaar?</h2>

      <p className="mt-4 text-gray-300 text-2xl text-left">
      To achieve goal, we implement different strategies and tactics,

       including marketing and channelizing the project towards the larger audience. 
       which will create a joeys atmosphere towards your project.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
       <div className="w-8 h-8">
            <img src="/free-icon.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Free</h3>

        <p className="mt-1 text-sm text-gray-300">
        Free listing of your project for lifetime.
        </p>
      </div>

      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
         <div className="w-8 h-8">
            <img src="/technical-support.png" />
            </div>
        <h3 className="mt-4 text-xl font-bold text-white">Support</h3>

        <p className="mt-1 text-sm text-gray-300">
        24/7 Support from the team of Upcomingnft.
        </p>
      </div>

      {/* <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
       
       <div className="w-8 h-8">
            <img src="/trend.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Trend</h3>

        <p className="mt-1 text-sm text-gray-300">
        Get exposure from heavy traffic i.e, 8-10k visitors of Pisaar.
        </p>
      </div> */}

      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/personalization.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Personalization</h3>

        <p className="mt-1 text-sm text-gray-300">
        Get Personalised event alerts to all our subscribers.
        </p>
      </div>

      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/promotion.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Promotion</h3>

        <p className="mt-1 text-sm text-gray-300">
        Astounding packages are available to promote your NFT Project.
        </p>
      </div>

      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/document.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Document</h3>

        <p className="mt-1 text-sm text-gray-300">
        We are open to every NFT publisher who wants our whitelist data for free.
        </p>
      </div>
      {/* <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/artist-goal.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Artist</h3>

        <p className="mt-1 text-sm text-gray-300">
        Our goal at upcomingnft is to support the talents of every artist by promoting them.
        </p>
      </div> */}
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/communities.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Community</h3>

        <p className="mt-1 text-sm text-gray-300">
        We make a good community and a renowned presence on social media.
        </p>
      </div>
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/endless.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Automation</h3>

        <p className="mt-1 text-sm text-gray-300">
        Enable unlimited event edits in the promoted events. Automate your pipeline.
        </p>
      </div>
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/trending-topic.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">NewsLetter</h3>

        <p className="mt-1 text-sm text-gray-300">Stay updated with the NFT trends, topics, and news. We make a good community and a renowned presence on social media.
        </p>
      </div>
    </div>

    {/* <div className="mt-12 text-center">
      <div
        className="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
       
      >
        <span className="text-sm font-medium"> Submit Event</span>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
      </div>
    </div> */}
  </div>
</section>


      {/* THIRD */}
      {/* <div className="space-y-4">
  <details className="p-6 rounded-lg bg-gray-50 group" open>
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="font-medium text-gray-900">
        What is Pissar?
      </h5>

      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>

  <details className="p-6 rounded-lg bg-gray-50 group">
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h5>

      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>
</div> */}
      </div>
    );
  };