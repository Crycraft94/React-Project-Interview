import {React , useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import data from './countries.json';


export const Search = () => {
  const [input , setInput] = useState("");
  const changeInput=(e)=>{
    setInput(e.target.value);
    console.log(input);
  }
  const handleSearch =(searchTerm)=>{
    setInput(searchTerm);
    console.log("Search",searchTerm);
  }
  
  return (
   <>
    <div className="navbar bg-neutral text-neutral-content ">
      <div className="flex-1">
        <Link to='/'><a className="btn btn-ghost normal-case text-xl">Website</a></Link>
      </div>
    </div>
   <div className='search-container mx-auto  w-full md:w-[50%] px-10 pt-10 flex flex-row items-center'>
   <div className='input-wrapper flex flex-row items-center bg-white w-full rounded-lg px-4 shadow'>
      <FiSearch  className='text-[#203785]'/>
      <input type="text" className='w-full bg-transparent bordere-none h-full outline-0 rounded-lg p-2' placeholder='Search...' value={input} onChange={changeInput}/>
      
    </div>
    <div className=' ml-6'>
    <button className='bg-[#2B3440] text-white rounded-lg text-sm py-2 px-4' onClick={() => handleSearch(input)}>Search</button>
    </div>
   </div>
   <div className='dropdow mx-auto flex flex-col justify-start w-[50%] pt-2 px-14'>
      {data.filter(item=>{
        const searchTerm = input.toLowerCase();
        const countryName = item.name.toLowerCase();
        return searchTerm && countryName.startsWith(searchTerm) && countryName !== searchTerm;

      }).map((item)=> <div onClick={()=>handleSearch(item.name)} className='dropdown-row my-2 cursor-pointer' key={item.code}>{item.name}</div>)}
    </div>
   </>
  )
}
