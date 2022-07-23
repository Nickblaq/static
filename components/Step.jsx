export const Step = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="w-full md:w-6/12 md:order-2 grid grid-cols-2 grid-rows-2 gap-2">
              <img className="rounded-lg shadow-md shadow-slate-600" src="/edo.gif" />
            <img className="rounded-lg shadow-md shadow-slate-600" src="/dood.jpg" />
            <img className="rounded-lg shadow-md shadow-slate-600" src="/sneek2.png" />
            <img className="rounded-lg shadow-md shadow-slate-600" src="/passport.gif" />
            </div>
        <div className=" w-full md:w-6/12 mb-10 md:mx-auto sm:text-center  md:mb-12 md:order-1">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Make history
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative font-black text-blue-900 text-4xl">Pisaar</span>
            </span>{' '}
            MarketPlace
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Pisaar  cover the most eye-catching NFt-Whitelist, 
          drops, exciting events, and high-profile releases that keep the wheels of the Non-Fungible Token industry turning!
          </p>
        </div>
        </div>

        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                1
              </p>
              <p className="text-lg md:text-2xl font-bold leading-5 text-blue-700">List your whitelist spot</p>
            </div>
            <p className="text-sm text-gray-900">
              List whitelist spot on the marketplace by uploading relevant details, Buy	&amp; Sell whitelist spot securely using Pisaar.
            </p>
          </div>
          
          <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                3
              </p>
              <p className=" font-bold leading-5 text-blue-700 text-lg md:text-2xl">Calender</p>
            </div>
            <p className="text-sm text-gray-900">
            We cover the most eye-catching drops, exciting events, and high-profile releases that keep the wheels of the Non-Fungible Token industry turning!
              Keep tabs on your favourite NFT projects by putting on push notification.
            </p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              <svg
                className="text-white w-7"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                2
              </p>
              <p className="text-lg md:text-2xl text-blue-700 font-bold leading-5">Marketing</p>
            </div>
            <p className="text-sm text-gray-900">
              Engage thousands of active users. Reach users across our social network, access targeted users Pisaar Campaign.
            </p>
          </div>
        </div>
      </div>
    );
  };