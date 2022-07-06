import Link from 'next/link'




const Navbar = () => {

    return (
        <>
        <div className="flex justify-between items-center w-11/12 mx-auto mt-6">
        <div className="flex cursor-pointer">
            <div className="w-8 h-8">
            <img src="/nftlogo.svg" />
            </div>
            <h1 className="text-2xl font-extrabold">Cursor</h1>
        </div>

        {/* <Link href='/contact'>
            <div className="px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg rounded-3xl cursor-pointer">Trade</div>
        </Link> */}
        </div>
        
        </>
    )
}

export default Navbar