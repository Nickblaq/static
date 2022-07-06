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
            <p>* This allows risk-sharing and helps Nft Cursor ensure an ethical and fair market.</p>
            </div>
            </Item>
            
            <Item title="What is NftCursor?">
            <div className="space-y-8 ">
            <p>* Nft Cursor is an NFT whitelist marketplace; it connects buyers and sellers of whitelisting spots in a peer-to-peer fashion, powered by smart contract.</p>
            <p>* Nft Cursor helps NFT enthusiasts to curate upcoming mints through direct mail notifications.</p>
            <p>* Nft Cursor uses a unique algorithm to provide NFT data such as trending NFTs and upcoming NFTs available for public view and use.</p>
            </div>
            </Item>

            <Item title="How do I buy whitelisting spots on Nft Cursor?">
            <div className="space-y-8 ">
            <p>* We have prepared a step-by-step guide on how to buy on Nft Cursor.</p>
            <p>* Kindly click here to get started.</p>
            </div>
            </Item>

            <Item title="How do I sell whitelisting spots on Nft Cursor?">
            <div className="space-y-8 ">
            <p>* We have prepared a step-by-step guide on how to sell on Nft Cursor.</p>
            <p>* Kindly click 
              {" "}
              <Link href='/contact'>
             <span className="text-blue-500 cursor-pointer underline text-lg font-semibold" > here</span>
              </Link>
              {" "}
               to get started.</p>
            </div>
            </Item>

            <Item title="How is fraud prevented on Nft Cursor?">
            <div className="space-y-8 ">
            <p>* Fraud is prevented via AI automation tools, escrow and dispute resolution measures, to ensure everyone has an enjoyable experience.</p>
            <p>* Bad actors are disincentivized to use Nft Cursor.</p>
            </div>
            </Item>

            <Item title="Apart from buying and selling of whitelisting spots, what else can I do on Nft Cursor?">
            <div className="space-y-8 ">
            <p>Nft Cursor allows you to curate upcoming mints, and set notification for the mint dates.</p>
            </div>
            </Item>

            <Item title="What is the payment method on Nft Cursor?">
            <div className="space-y-8 ">
            <p>The payment method is BUSD & USDT.</p>
            </div>
            </Item>

            <Item title="Do I pay fees when using Nft Cursor?">
            <div className="space-y-8 ">
            <p>* A 0 BUSD is required to transact with a seller.</p>
            <p>* A 2% tax from the seller is tenable to users of Nft Cursor.</p>
            <p>* No other fee is required to use Nft Cursor.</p>
            </div>
            </Item>

            <Item title="Is Nft Cursor safe?">
            <div className="space-y-8 ">
            <p>Nft Cursor is completely safe to use.</p>
            </div>
            </Item>
          </div>
        </div>
      </div>
    );
  };