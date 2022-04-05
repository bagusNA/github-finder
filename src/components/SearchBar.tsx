import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar() {
  return (
    <div className="relative flex justify-between px-2 py-2 text-sm bg-card-dark rounded-2xl shadow-2xl">
      <label htmlFor="searchInput" className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IoSearch className="text-blue-500 text-2xl"/>
      </label>
      <input
        type="text" 
        placeholder="Search GitHub username" 
        id="searchInput"
        className="pl-9 bg-transparent appearance-none outline-none truncate"
      />
      <button 
        className="bg-blue-600 px-4 py-3 font-bold rounded-lg transition shadow-xl hover:bg-blue-500"
      >
        Search
      </button>
    </div>
  )
}
