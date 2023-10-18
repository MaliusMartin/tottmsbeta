
import { link } from "fs";
import Appfrom from "./components/Appform";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
     
      <h1 className="text-4xl text-black font-bold mb-10">TAMISEMI ONLINE TEACHER TRANSFER MANAGEMENT SYSTEM (TOTTMS)</h1>
      
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="enter check number"
          // value={checkNumber}
          // onChange={(e) => setCheckNumber(e.target.value)}
          className="border border-gray-300 text-black rounded-md p-2"
        />
        <input
          type="text"
          placeholder="enter sur name"
          // value={sureName}
          // onChange={(e) => setSureName(e.target.value)}
          className="border border-gray-300  text-black rounded-md p-2"
        />
        <button
        type="button"
        // onClick={handleCheck}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 gap-4"
      >
        CHECK
      </button>


          <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 gap-4"
    >
      <Link href="/login">
        LOGIN
      </Link>
    </button>   

       
      < Appfrom form={{}} />

      </div>
      
    </div>
      {/* </div> */}
    </main>
  )
}
