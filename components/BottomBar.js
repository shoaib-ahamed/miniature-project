import Link from "next/link"

const BottomBar = () => {
  return (
    <div className="h-16 bg-mainColor text-white flex gap-3 justify-center font-bold sticky top-[780px] z-10">
        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
                <Link href="/categories/mens-collection" >Mens</Link>
            </button>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
                <Link href="/categories/jewelery">jewelery</Link>
            </button>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
                <Link href="/categories/electronics">gadget</Link>
            </button>
        </div>

        <div className="flex justify-center items-center">
            <button className="bg-mainColor border border-white hover:bg-slate-300 hover:text-mainColor h-10 w-20 rounded-md">
            <Link href="/categories/womens-collection">womens</Link>
            </button>
        </div>
    </div>
  )
}

export default BottomBar