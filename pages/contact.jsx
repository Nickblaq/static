// import { useState, useEffect, useRef } from "react"
// import base from "./base"



// const Contact = () => {


//     const [tester, setTester] = useState('Request')

//    const nameRef = useRef()
//    const projectRef = useRef()
//    const priceRef = useRef()
//    const infoRef = useRef()
//    const emailRef = useRef()
//    const twitterRef = useRef()

//     const [formData, setFormData] = useState({})
//     const [message, setMessage] = useState("")
//     const [isLoading, setLoading] = useState(false);

//     // const handleInput = (e) => {
//     //     const copyFormData = { ...formData }
//     //     copyFormData[e.target.name] = e.target.value
//     //     setFormData(copyFormData)
//     // }


//     const adduser = (e) => {
//         e.preventDefault()
//         setLoading(true)
//         const Name = nameRef.current.value;
//         const Project = projectRef.current.value;
//         const Price = priceRef.current.value;
//         const Info = infoRef.current.value;
//         const Email = emailRef.current.value;
//         const Twitter = twitterRef.current.value;

//         base('nftlist').create(
//             {Name, Project, Price, Info, Email, Twitter},
//             function(err, record) {
//                 if (err) {
//                     setLoading(false)
//                     console.log('This is airtable record error', errr)
//                     return;
//                 }
//                 setTester("Request Submitted !")
//             }
//         )
//         setLoading(false)
//     }

//     // const sendData = async (e) => {
//     //     e.preventDefault()
//     //     try {
//     //         const response = await fetch(
//     //             "<your_airtable_nocodeapi_endpoiint>?tableName=feedback",
//     //             {
//     //                 method: "post",
//     //                 body: JSON.stringify([formData]),
//     //                 headers: {
//     //                     "Content-Type": "application/json",
//     //                 },
//     //             }
//     //         )
//     //         const json = await response.json()
//     //         console.log("Success:", JSON.stringify(json))
//     //         setMessage(json.message)
//     //     } catch (error) {
//     //         console.error("Error:", error)
//     //         setMessage("Error")
//     //     }
//     // }

//     return (
//         <>
//         <div className="h-full flex justify-between items-center align-middle">
          
//     <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
//         <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Nft Cursor Request</h2>
        
//         <form>
//             <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200" >Name</label>
//                     <input ref={nameRef} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200" >Project Name</label>
//                     <input ref={projectRef} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200" >Price Range</label>
//                     <input ref={priceRef} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200" >Additional Info</label>
//                     <input ref={infoRef} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200" >Email</label>
//                     <input ref={emailRef} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>

//                 <div>
//                     <label className="text-gray-700 dark:text-gray-200" >Twiter Handle</label>
//                     <input ref={twitterRef}  type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
//                 </div>
//             </div>

//             <div className="flex justify-end mt-6">
//             {isLoading? 
//                                 (<button  type="button" className="px-6 py-2 leading-5 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800">
//                                 <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
//                                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
//                                 </svg>
//                                 Loading...
//                             </button>): 
//                             (
//                                 <button 
//                                 onClick={adduser}
//                                 type='submit'
//                                 className="px-6 py-2 leading-5 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800">{tester}</button>
//                             )
// }

//             </div>
//         </form>
//     </section>
//         </div>
//         </>
//     )
// }

// export default Contact