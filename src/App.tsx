import React from "react";
import { IoSunnyOutline, IoLocation, IoLink, IoMail, IoBusiness, IoSearch } from 'react-icons/io5';
import defaultProfile from './assets/img/profile.jpg';

function App() {
  return (
    <main className="min-h-screen flex flex-col gap-y-4 text-sm bg-dark text-light font-mono p-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-2">
        <h1 className="text-xl font-bold">GitHub-finder</h1>
        <div className="flex items-center gap-x-2">
          <p className="tracking-widest text-sm">LIGHT</p>
          <IoSunnyOutline className="text-2xl"/>
        </div>
      </div>

      {/* Search bar */}
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

      {/* Main card */}
      <div className="flex flex-col gap-y-4 bg-card-dark p-5 rounded-2xl shadow-2xl">
        {/* Main info */}
        <div className="flex gap-x-6">
          <img src={defaultProfile} alt="Default profile" className="rounded-full" width={100} />
          <div className="flex flex-col justify-center gap-y-1">
            <h2>Bagus Nur A.</h2>
            <p className="text-blue-400">@bagusNA</p>
            <p className="">Joined 7 July, 2019</p>
          </div>
        </div>

        {/* Description */}
        <p className="leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus voluptatibus error quidem enim! Officia atque vero repellat nulla recusandae rem! Modi mollitia minus placeat quod minima fugit itaque voluptatem!</p>

        {/* Profile stats */}
        <div className="grid grid-cols-3 justify-between py-4 bg-dark rounded-xl">
          <div className="flex flex-col justify-between gap-y-2 text-center">
            <p>Repos</p>
            <p className="font-bold text-lg">8</p>
          </div>
          <div className="flex flex-col justify-between gap-y-2 text-center">
            <p>Followers</p>
            <p className="font-bold text-lg">8</p>
          </div>
          <div className="flex flex-col justify-between gap-y-2 text-center">
            <p>Following</p>
            <p className="font-bold text-lg">8</p>
          </div>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-3">
            <IoLocation className="text-3xl" />
            <p>East Borneo, Indonesia</p>
          </div>
          <div className="flex items-center gap-x-3">
            <IoLink className="text-3xl" />
            <a href="https://github.com/bagusNA">https://github.com/bagusNA</a>
          </div>
          <div className="flex items-center gap-x-3">
            <IoMail className="text-3xl" />
            <a href="mailto:bagusnur@protonmail.com">bagusnur@protonmail.com</a>
          </div>
          <div className="flex items-center gap-x-3">
            <IoBusiness className="text-3xl" />
            <p>Intern at Jupiter IT Solution</p>
          </div>
        </div>

      </div>

    </main>
  );
}

export default App;
