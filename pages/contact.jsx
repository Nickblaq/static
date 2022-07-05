import { useState, useEffect } from "react"




const Contact = () => {

    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")

    const handleInput = (e) => {
        const copyFormData = { ...formData }
        copyFormData[e.target.name] = e.target.value
        setFormData(copyFormData)
    }


    const sendData = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                "<your_airtable_nocodeapi_endpoiint>?tableName=feedback",
                {
                    method: "post",
                    body: JSON.stringify([formData]),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            const json = await response.json()
            console.log("Success:", JSON.stringify(json))
            setMessage(json.message)
        } catch (error) {
            console.error("Error:", error)
            setMessage("Error")
        }
    }

    return (
        <>
        <div className="h-full flex justify-between items-center align-middle">
          
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Nft Cursor Request</h2>
        
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Project Name</label>
                    <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Price Range</label>
                    <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Additional Info</label>
                    <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Twitter Username</label>
                    <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800">Request</button>
            </div>
        </form>
    </section>
        </div>
        </>
    )
}

export default Contact