import { StaticImageData } from "next/image";



const ngao: StaticImageData = {
  src: "/public/ngao.png",
 
  width: 100,
  height: 100,
};



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> */}
      <h1 className="text-4xl text-black font-bold mb-10">TAMISEMI ONLINE TEACHER TRANSFER MANAGEMENT SYSTEM (TOTTMS)</h1>
      <img src={ngao.src} alt="tottms-ngao" />
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="enter check number"
          // value={checkNumber}
          // onChange={(e) => setCheckNumber(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="enter sure name"
          // value={sureName}
          // onChange={(e) => setSureName(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <button
        type="button"
        // onClick={handleCheck}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
      >
        Check
      </button>
   
      </div>
      
    </div>
      {/* </div> */}
    </main>
  )
}
