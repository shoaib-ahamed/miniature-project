import Link from "next/link"

const BottomBar = () => {
  return (
    <div className="h-16 w-full bg-mainColor text-white gap-3 grid grid-cols-4 justify-center items-center font-bold fixed bottom-0 z-10 md:hidden">
        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
                <Link href="/categories/mens-collection" >Mens</Link>
            </button>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
                <Link href="/categories/jewelery">Jewelery</Link>
            </button>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
                <Link href="/categories/electronics">Gadget</Link>
            </button>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
            <Link href="/categories/womens-collection">Womens</Link>
            </button>
        </div>
    </div>
  )
}

export default BottomBar