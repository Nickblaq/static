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
        <div
          className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/get-started"
        >
          <span className="text-sm font-medium">Submit Event</span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
        </div>
        <div
          className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/get-started"
        >
          <span className="text-sm font-medium"> Learn More</span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SECOND!!! */}

      <section className="text-white bg-gray-900">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Why kickstart your marketing upcoming Event with Cusor?</h2>

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

      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
       
       <div className="w-8 h-8">
            <img src="/trend.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Trend</h3>

        <p className="mt-1 text-sm text-gray-300">
        Get exposure from heavy traffic i.e, 8-10k visitors of Cusor.
        </p>
      </div>

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
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
      >
        <div className="w-8 h-8">
            <img src="/artist-goal.png" />
            </div>

        <h3 className="mt-4 text-xl font-bold text-white">Artist</h3>

        <p className="mt-1 text-sm text-gray-300">
        Our goal at upcomingnft is to support the talents of every artist by promoting them.
        </p>
      </div>
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

    <div className="mt-12 text-center">
      <div
        className="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
       
      >
        <span className="text-sm font-medium"> Submit Event</span>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>
      </div>
    </div>
  </div>
</section>


      {/* THIRD */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <a 
            // href="/" 
            className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">The</span>
                </span>{' '}
                Frequently Asked Questions
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Have personal questions? Contact support <soan className='text-blue-700'>here.</soan>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Item title="What is NFT?">
              <div className="space-y-8 ">
            <p>  * NFT stands for non-fungible tokens; they are non-interchangeable units of data stored on the blockchain and can be represented by several digital forms.</p>
            <p>* An NFT cannot be changed like-for-like like bitcoin or any other digital asset.</p>
            <p>* NFT has a wide array of uses, depending on the creator’s choice.</p>
            </div>
            </Item>
            <Item title="What are NFT collections?">
            <div className="space-y-8 ">
            <p>* These are a number of NFTs that look alike at their base but are essentially different in properties, characteristics, and utilities.</p>
            <p>* A collection is created by a team or a project e.g BoredApes, meebits, cryptopunks etc.</p>
            </div>
            </Item>
            <Item title="What is “Gas War”?">
            <div className="space-y-8 ">
            <p>*  A Gas war is an event that occurs as a result of multiple people attempting to mint a project or from an NFT collection at the same time which causes a pool of transactions more than the network can handle per block.</p>
            <p>* In this case, financial politics is often at play via the transaction fee (gas).</p>
            <p>* The higher the transaction fee, the higher the chances of getting your transaction processed successfully and fast.</p>
            </div>
            </Item>
            <Item title="What is an NFT whitelist?">
            <div className="space-y-8 ">
            <p>* An NFT whitelist is a list of eligible Hash addresses that would be added to an NFT collection’s smart contract to allow such addresses Mint from the collection without having to experience gas wars and other anomalies.</p>
            <p>
* NFT whitelisting is a process of getting a wallet address pre-approved for minting an NFT out of an NFT collection.</p>
            </div>
            </Item>
            <Item title="How do I get whitelisted?">
            <div className="space-y-8 ">
            <p>* You can get whitelisted by being active, early, or in an advantageous position acknowledged by an NFT project.
</p>
            <p>
            * Some ways in which whitelist spots are earned are: being helpful within the project’s community discord, drawing your own version of that project’s NFT, supporting the project by advertising using your platform, performing activities required by the project.</p>
            </div>
            </Item>
            <Item title="Why is whitelisting logical?">
            <div className="space-y-8 ">
            <p>* It is only fair and logical for early supporters of a project to be given an edge in certain situations.</p>
            <p>* To ensure early supporters are able to mint, their wallet addresses are often pre-approved, so they do not become victims of “Gas War”.</p>
            <p>* It reduces the tendency for an NFT collection to look scammy.</p>
            <p>* It helps promote the NFT project and creates demand and supply through public appeal.</p>
            </div>
            </Item>
            <Item title="Can I sell above mint price?">
            <div className="space-y-8 ">
            <p>* No, you cannot sell above mint price .</p>
            <p>* List ads are only valid if sell price is set at 50% less than mint price .</p>
            <p>* This allows risk-sharing and helps Cusor ensure an ethical and fair market.</p>
            </div>
            </Item>
            
            <Item title="What is NftCursor?">
            <div className="space-y-8 ">
            <p>* Cusor is an NFT whitelist marketplace; it connects buyers and sellers of whitelisting spots in a peer-to-peer fashion, powered by smart contract.</p>
            <p>* Cusor helps NFT enthusiasts to curate upcoming mints through direct mail notifications.</p>
            <p>* Cusor uses a unique algorithm to provide NFT data such as trending NFTs and upcoming NFTs available for public view and use.</p>
            </div>
            </Item>

            <Item title="How do I buy whitelisting spots on Cusor?">
            <div className="space-y-8 ">
            <p>* We have prepared a step-by-step guide on how to buy on Cusor.</p>
            <p>* Kindly click here to get started.</p>
            </div>
            </Item>

            <Item title="How do I sell whitelisting spots on Cusor?">
            <div className="space-y-8 ">
            <p>* We have prepared a step-by-step guide on how to sell on Cusor.</p>
            <p>* Kindly click 
              {" "}
              <Link href='/contact'>
             <span className="text-blue-500 cursor-pointer underline text-lg font-semibold" > here</span>
              </Link>
              {" "}
               to get started.</p>
            </div>
            </Item>

            <Item title="How is fraud prevented on Cusor?">
            <div className="space-y-8 ">
            <p>* Fraud is prevented via AI automation tools, escrow and dispute resolution measures, to ensure everyone has an enjoyable experience.</p>
            <p>* Bad actors are disincentivized to use Cusor.</p>
            </div>
            </Item>

            <Item title="Apart from buying and selling of whitelisting spots, what else can I do on Cusor?">
            <div className="space-y-8 ">
            <p>Cusor allows you to curate upcoming mints, and set notification for the mint dates.</p>
            </div>
            </Item>

            <Item title="What is the payment method on Cusor?">
            <div className="space-y-8 ">
            <p>The payment method is BUSD & USDT.</p>
            </div>
            </Item>

            <Item title="Do I pay fees when using Cusor?">
            <div className="space-y-8 ">
            <p>* A 0 BUSD is required to transact with a seller.</p>
            <p>* A 2% tax from the seller is tenable to users of Cusor.</p>
            <p>* No other fee is required to use Cusor.</p>
            </div>
            </Item>

            <Item title="Is Cusor safe?">
            <div className="space-y-8 ">
            <p>Cusor is completely safe to use.</p>
            </div>
            </Item>
          </div>
        </div>
      </div>
      </div>
    );
  };