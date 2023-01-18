import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';


const SearchBar = ({products}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = products.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };

    console.log(filteredData);


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };


    const lessDetails =  (str) => {
        return str.split(/\s+/).slice(0, 5).join(" ");
    }  


  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-5'>
            

            <div className='flex justify-between items-center border border-black rounded-lg h-10 w-72 px-2'>
                <input type="text" className="outline-0" placeholder="Search" value={wordEntered} onChange={handleFilter}/>
                {filteredData.length === 0 ? (
                <AiOutlineSearch />
                ) : (
                <AiOutlineClose onClick={clearInput} />
            )}
            </div>

            {filteredData.length != 0 && (
                <div className="h-72 w-72 border rounded-md border-black bg-slate-300  overflow-scroll">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                        <a key={key} href={value.link}>
                            <Link href={`/product/${value.id}`}>
                            <div className="flex flex-row border border-mainColor gap-2">
                                <div className='rounded-md h-16 w-16 flex justify-center items-center'>
                                    <Image className='rounded-md' height="50" width="50" alt="Product" src={value.image}/>
                                </div>
                                <p className="font-normal text-mainColor text-left">{lessDetails(value.title)}...</p>
                            </div>
                            </Link>
                        </a>
                        );
                    })}
                </div>
            )}

        </div>
    </div>
  )
}

export default SearchBar