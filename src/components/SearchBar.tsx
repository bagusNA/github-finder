import React from 'react';
import { IoSearch } from 'react-icons/io5';

interface Props {
  value: string,
  action: any,
  onInputChange: any
}

function onEnter(event: React.KeyboardEvent<HTMLDivElement>, callback: any) {
  if (event.key === "Enter") {
    callback();
  }
}

export const SearchBar:React.FC<Props> = props => {
  return (
    <div className="relative flex justify-between px-2 py-2  rounded-2xl shadow-2xl md:text-lg dark:bg-card-dark dark:text-light">
      <label htmlFor="searchInput" className="absolute inset-y-0 left-0 flex items-center pl-3 md:pl-4">
        <IoSearch className="text-blue-500 text-2xl md:text-4xl"/>
      </label>
      <input
        type="text" 
        placeholder="Search GitHub username" 
        id="searchInput"
        value={props.value}
        onChange={props.onInputChange}
        onKeyDown={e => onEnter(e, props.action)}
        className="pl-9 flex-1 bg-transparent appearance-none outline-none truncate md:pl-14"
      />
      <button 
        className="bg-blue-600 text-light px-4 py-3 font-bold rounded-lg transition shadow-xl hover:bg-blue-500"
        onClick={props.action}
      >
        Search
      </button>
    </div>
  )
}
