import React, { useState } from "react";
import { IoMoon, IoSunny } from 'react-icons/io5';
import { unstable_batchedUpdates } from "react-dom";

import { getUserData, searchUser } from "./api/user";
import { defaultData } from './options';
import { User } from "./types/User";

import { SearchBar } from './components/SearchBar';
import ProfileCard from "./components/cards/ProfileCard";
import NotFoundCard from "./components/cards/NotFoundCard";
import SkeletonCard from "./components/cards/SkeletonCard";
import SearchCard from "./components/cards/SearchCard";

function App() {
  const [userData, setUserData] = useState(defaultData);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  let mainCard;

  function handleSearchChange(e: any) {
    setSearch(e.target.value);
  }

  async function handleSearchAction() {
    setIsLoading(true);
    let data = await searchUser(search);
    setIsLoading(false);

    if (data === []) return setIsNotFound(true);

    unstable_batchedUpdates(() => {
      setIsNotFound(false);
      setSearchResult(data);
    });
  }

  function toggleTheme() {
    setIsDarkMode(prev => !prev);
  }

  // Dark mode toggle
  if (isDarkMode && !document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
  }
  else if (!isDarkMode && document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
  }
  
  if (isLoading) {
    mainCard = <SkeletonCard />;
  }
  else if (isNotFound) {
    mainCard = <NotFoundCard />;
  }
  else {
    let resultCards = searchResult.map(user => {
      return <SearchCard user={user} onClick={() => console.log(user)} key={user.id} />;
    });

    mainCard = (
      <div className="grid grid-cols-2 gap-6 lg:gap-8">
        {resultCards}
      </div>
    );
  }

  return (
    <main className="min-h-screen flex justify-center bg-light  text-sm text-dark font-mono transition lg:text-base dark:bg-dark dark:text-light">
      <div className="min-h-screen min-w-full flex flex-col gap-y-6 p-6 md:justify-center sm:container sm:min-w-0 lg:max-w-screen-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-2 hover:cursor-pointer">
          <a href="/"><h1 className="text-xl font-bold md:text-2xl">GitHub-finder</h1></a>
          <div className="flex items-center gap-x-2 opacity-80 select-none transition hover:opacity-100 hover:cursor-pointer" onClick={toggleTheme}>
            {!isDarkMode ?
              <React.Fragment>
                <p className="tracking-widest text-sm">LIGHT</p>
                <IoSunny className="text-2xl"/>
              </React.Fragment>
              :
              <React.Fragment>
                <p className="tracking-widest text-sm">DARK</p>
                <IoMoon className="text-2xl"/>
              </React.Fragment>
            }
          </div>
        </div>

        {/* Search bar */}
        <SearchBar value={search} onInputChange={handleSearchChange} action={handleSearchAction} />
        
        {/* Main profile card */}
        {mainCard}
      </div>
    </main>
  );
}

export default App;
