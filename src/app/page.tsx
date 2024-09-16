import Image from "next/image"


const Homepage = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center" >
      <div className="text-xl w-1/2 px-8">
        <Image 
        src={"./pictures/fb.svg"}
        width={100}
        height={100}
        alt="facebook-logo"
        >
        </Image>
        <p className="mt-3">Facebook help to connect and share memories</p>
      </div>
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/4">
        <input className="my-2 border-1 border-gray-100 p-1 rounded-md focus:outline outline-blue-600" type="text" placeholder=" Enter Email or phone number "/>
        <input className="my-2 border-1 border-gray-100 p-1 rounded-md focus:outline outline-blue-600" type="text" placeholder="Enter your passsword "/>
        <button className="bg-blue-600 my-2 py-1 text-lg font-bold text-white rounded-md hover:bg-blue-700 "> Log In</button>
        <p className=" cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">Forget Password</p>
        <span className="my-2">
          <hr/>
        </span>
        <button className="bg-green-600 my-2 py-1 px-2 text-lg 
        font-bold text-white rounded-md hover:bg-green-700 w-fit mx-auto"> Creat new account</button>
      </div>
    </div>
  )
}

export default Homepage