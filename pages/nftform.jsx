import { useState, useEffect } from "react"

function NftForm() {

  const options = [
    {
      label: "ETH",
      value: "Ethereum",
    },
    {
      label: "BSC",
      value: "Binance",
    },
    {
      label: "SOL",
      value: "Solana",
    },
    {
      label: "POLYGON",
      value: "pOLYGON",
    },
  ];




  const categories = [
    {
      label: "Wearable",
      value: "Wearable",
    },
    {
      label: "Wearable collectable",
      value: "Wearable collectable",
    },
    {
      label: "Ecosystem",
      value: "Ecosystem",
    },
    {
      label: "Utility",
      value: "Utility",
    },
    {
      label: "Auction",
      value: "Auction",
    },
    {
      label: "Collectable",
      value: "Collectable",
    },
    {
      label: "Nft Giveaways",
      value: "Nft Giveaways",
    },
    {
      label: "Nft Drop",
      value: "Nft Drop",
    },
    {
      label: "Nft Lunch",
      value: "Nft Lunch",
    },
  ];


  const tokens = [
    {
      label: "ETH",
      value: "Ethereum",
    },
    {
      label: "BNB",
      value: "Binance",
    },
    {
      label: "SOL",
      value: "Solana",
    },
    {
      label: "MATIC",
      value: "pOLYGON",
    },
    {
      label: "USDT",
      value: "USDT",
    },
    {
      label: "BUSD",
      value: "BUSD",
    },
    {
      label: "DAI",
      value: "DAI",
    },
  ];

  

  const [isChain, setChain] = useState();
  const [isCategory, setCategory] = useState();
  const [isCurrency, setCurrency] = useState()


  const [startDate, setStartDate] = useState(new Date());


  const onSubmit = data => {
    alert(JSON.stringify(data));
  }

// const saveChainOption = () => {
//   const chains = {}
//   chains = isChainOption.toLocaleLowerCase()
//   console.log('this is save', chains)
// }



    return <div>

<section className="bg-gray-100">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1">
     

      <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" >Project Name</label>
            <input className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal" placeholder="Project Name" type="text" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only">Email</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="Email address"
                type="email"
              />
            </div>

            <div>
              <label className="sr-only">Price Range</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="e.g $100-$200"
                type="text"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div className="flex flex-col">
            <p className="text-left py-4 text-lg font-mono font-thin">Select Chain</p>
            <select 
            className="block w-full p-3 border border-gray-200 rounded-lg"
              value={isChain}
              defaultValue={isChain}
              onChange={(e) => setChain(e.target.value)}
            >
            {options.map((index, option) => (
              <option
              className="text-sm font-medium"
              key={index}
               value={option.value}>
                
                {option.label}</option>
            ))}
          </select>
            </div>
            <div className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">Select Category</p>
            <select 
            className="block w-full p-3 border border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
              value={isCategory}
              defaultValue={isCategory}
              onChange={(e) => setCategory(e.target.value)}
            >
            {categories.map((index, category) => (
              <option
              className="text-sm font-medium"
              key={index}
               value={category.value}>
                
                {category.label}</option>
            ))}
          </select>
            </div>

            <div className="flex flex-col">
              <p className="text-left py-4 text-lg  font-mono font-thin">Select Currency</p>
            <select 
            className="block w-full p-3 border border-gray-200 rounded-lg"
              value={isCurrency}
              defaultValue={isCurrency}
              onChange={(e) => setCategory(e.target.value)}
            >
            {tokens.map((index, token) => (
              <option
              className="text-sm font-medium"
              key={index}
               value={token.value}>
                
                {token.label}</option>
            ))}
          </select>
            </div>
          </div>



          

          <div>
            <label className="sr-only" >Message</label>
            <textarea
              className="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>
          

          


          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3 align-content: center">
            <div className="flex flex-col">
            <p className="text-left py-4 text-lg font-mono font-thin">Website Url</p>
              <label className="sr-only">website url</label>
              <input
                className="block w-full p-3 border border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="e.g https://cusor.xyz"
                type="text"
              />
            </div>

            <div  className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">Twitter Url</p>
              <label className="sr-only">twitter</label>
              <input
                className="block w-full p-3 border border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="e.g https://twitter.com/cusor"
                type="text"
              />
            </div>

            <div className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">Discord Url</p>
              <label className="sr-only">Event Tags</label>
              <input
                className="block w-full p-3 border border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="Discord URl"
                type="text"
              />
            </div>
            </div>


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
            <div className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">Start Date, Time &apos; GMT</p>
              <label className="sr-only">Start Date, Time &apos; GMT</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="Day/Month/Year, 10am, GMT +09:30"
                type="email"
              />
            </div>

            <div className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">End Date, Time &apos; GMT</p>
              <label className="sr-only">End Date, Time &apos; GMT</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="Day/Month/Year, 10am, GMT +09:30"
                type="text"
              />
            </div>

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
            <div className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">Pre-Sale Mint Price</p>
              <label className="sr-only">Pre-Sale Mint Price</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="e.g 0.1 ETH"
                type="email"
              />
            </div>

            <div className="flex flex-col">
            <p className="text-left py-4 text-lg  font-mono font-thin">Public Mint Price</p>
              <label className="sr-only">Public Mint Price</label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg placeholder:font-sans placeholder:font-normal"
                placeholder="e.g 0.1 ETH"
                type="text"
              />
            </div>

          </div>

s

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
            >
              <span className="font-medium"> Send Enquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  }
  
  export default  NftForm


  // export async function getServerSideProps() {
  //   const airtableApi = process.env.AIRTABLE_API_KEY
  //   const baseId = process.env.AIRTABLE_BASE_KEY
    

  //   console.log(
  //     `Api Keys ${airtableApi} and ${baseId}`
  //   )
  //   return {
  //      props: ({ airtableApi, baseId })  // will be passed to the page component as props
  //   }
  // }