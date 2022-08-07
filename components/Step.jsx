import Link from "next/link";

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
              NFT
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
              <span className="relative font-black text-blue-900 text-4xl">COLLECTORS</span>
            </span>{' '}
            DAO
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Become a collector, join forces and buy NFTs as a team.
          </p>
          <Link href='/listnftform'>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
            >
              <span className="font-medium">Join Discord</span>

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
          </Link>
        </div>
        </div>

        {/* <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                1
              </p>
              <p className="text-lg md:text-2xl font-bold leading-5 text-blue-700">List your whitelist spot</p>
            </div>
            <p className="text-sm text-gray-900">
            List whitelist spot on the marketplace by uploading relevant details.
            </p>
          </div>
          
          <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                3
              </p>
              <p className=" font-bold leading-5 text-blue-700 text-lg md:text-2xl">Buy a whitelist spot</p>
            </div>
            <p className="text-sm text-gray-900">
            Engage with whitelist-spot sell ads of interest.
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
              <p className="text-lg md:text-2xl text-blue-700 font-bold leading-5">Monitor upcoming mints</p>
            </div>
            <p className="text-sm text-gray-900">
            Keep tabs on your favorite NFT projects by putting on push notification.
            </p>
          </div>
        </div> */}
      </div>
    );
  };