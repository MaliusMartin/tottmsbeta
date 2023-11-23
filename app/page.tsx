
import Appfrom from "./components/Appform";
import Link from "next/link";




export default function Home() {


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24">
    <div className="artboard artboard-horizontal phone-4 bg-white rounded-lg p-6 md:p-12">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col gap-4 p-4 md:p-10">

            <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-6 md:mb-10">TAMISEMI ONLINE TEACHER TRANSFER MANAGEMENT SYSTEM (TOTTMS)</h1>
          <div className=" bg-white p-14 lg-rounded">
            <div className="flex flex-col gap-4 pb-8 md:pb-12 shadow-2xl bg-slate-200 rounded-lg ">
                <input
                    type="text"
                    placeholder="Enter check number"
                    className="border border-gray-300 text-black rounded-md p-2"
                />
                <input
                    type="text"
                    placeholder="Enter surname"
                    className="border border-gray-300 text-black rounded-md p-2"
                />
                <button
                    type="button"
                    className="btn btn-outline font-bold py-2 px-4 rounded-md mt-4 md:mt-6 lg:mt-8"
                >
                    SEARCH
                </button>

                <div className="text-black">
                    <p className="py-2">Already have an account?
                        <Link href="/login" className="text-red-600 font-bold">Login</Link>
                    </p>
                </div>

                <Appfrom form={{}} />
            </div>
            </div>
        </div>
    </div>
</main>

  )
}
