import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoLocation, IoLink, IoSunny, IoBusiness, IoLogoTwitter } from 'react-icons/io5';
import Moment from 'react-moment';

import { SearchBar } from './components/SearchBar';
import { StatEntry } from './components/StatEntry';
import { FieldEntry } from "./components/FieldEntry";
import defaultProfile from './assets/img/profile.gif';
import { unstable_batchedUpdates } from "react-dom";

const settings = {
  pictureWidth: 100,
  lgPictureWidth: 150,
}

function App() {
  const [userData, setUserData] = useState({
    name: 'Patrick Star',
    login: 'patrick',
    html_url: 'https://github.com/users/bagusNA',
    avatar_url: defaultProfile,
    createdAt: '2021-05-25T12:38:17Z',
    email: 'patrickstar@mail.com',
    company: 'Rock Company',
    location: 'Bikini Bottom',
    twitter_username: null,
    public_repos: 7,
    followers: 2,
    following: 7,
    isDefault: true,
    bio: `Fly me to the moon
      Let me play among the stars
      Let me see what spring is like
      On a-Jupiter and Mars
      
      In other words: hold my hand
      In other words: baby, kiss me
    `,
    blog: null,
  });
  const [search, setSearch] = useState('');
  const [isNotFound, setIsNotFound] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode && document.documentElement.classList.contains('dark')) return;
    if (isDarkMode) return document.documentElement.classList.add('dark');

    if (!isDarkMode && !document.documentElement.classList.contains('dark')) return;
    document.documentElement.classList.remove('dark');
  })

  function handleSearchChange(e: any) {
    setSearch(e.target.value);
  }

  async function handleSearchAction() {
    let data = await getUserData(search);
    if (data.message === 'Not Found') return setIsNotFound(true);

    unstable_batchedUpdates(() => {
      setIsNotFound(false);
      setUserData(data);
    });
  }

  function getUserData(username: string) {
    return fetch('https://api.github.com/users/' + username)
      .then(res => res.json())
  }

  function toggleTheme() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <main className="min-h-screen flex justify-center bg-light  text-sm text-dark font-mono transition lg:text-base dark:bg-dark dark:text-light">
      <div className="min-h-screen min-w-full flex flex-col gap-y-6 p-6 md:justify-center sm:container sm:min-w-0 lg:max-w-screen-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-2 hover:cursor-pointer">
          <a href="/"><h1 className="text-xl font-bold md:text-2xl">GitHub-finder</h1></a>
          <div className="flex items-center gap-x-2" onClick={toggleTheme}>
            {!isDarkMode ?
              <React.Fragment>
                <p className="tracking-widest text-sm">LIGHT</p>
                <IoSunny className="text-2xl"/>
              </React.Fragment>
              :
              <React.Fragment>
                <p className="tracking-widest text-sm">DARK</p>
                <IoSunnyOutline className="text-2xl"/>
              </React.Fragment>
            }
            
          </div>
        </div>

        {/* Search bar */}
        <SearchBar value={search} onInputChange={handleSearchChange} action={handleSearchAction} />

        {/* Main card */}
        <div className="flex bg-card-light p-5 rounded-2xl shadow-2xl lg:p-8 dark:bg-card-dark">
          {!isNotFound
            ? 
              /* Main card content */
              <div className="flex flex-1 gap-x-12 ">
                {/* Profile picture for lg screen */}
                  <img 
                    src={userData.avatar_url}
                    alt="Default profile"
                    width={settings.lgPictureWidth}
                    height={settings.lgPictureWidth}
                    className="rounded-full hidden self-start lg:block"
                  />
                <div className="flex-1 flex flex-col gap-y-6">
                  {/* Main info */}
                  <div className="flex gap-x-6 lg:gap-none">
                    {/* Profile picture for mobile screen */}
                    <div className="min-w-fit flex items-center lg:hidden">
                      <img src={userData.avatar_url} 
                        alt="Default profile" 
                        width={settings.pictureWidth} 
                        height={settings.pictureWidth} 
                        className="rounded-full" 
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-y-1 lg:flex-row lg:justify-between lg:w-full">
                      <div className="flex flex-col justify-center gap-y-1">
                        <h2 className="font-bold text-xl">{userData.name}</h2>
                        <a 
                          className="text-blue-400" 
                          href={userData.html_url}
                        >
                          @{userData.login}
                        </a>
                      </div>
                      <p>Joined at <Moment format="MMMM DD, YYYY" date={Date.parse(userData.createdAt)} /></p>
                    </div>
                  </div>

                    {/* Description */}
                  <p className="leading-8 whitespace-pre-line">
                    {userData.bio
                      ? userData.bio 
                      : <span className="opacity-60">
                          This profile has no bio.
                        </span>}
                  </p>

                  {/* Profile stats */}
                  <div className="grid grid-cols-3 justify-between py-4 bg-light rounded-xl md:px-8 dark:bg-dark">
                    <StatEntry title='Repos' value={userData.public_repos} />
                    <StatEntry title='Followers' value={userData.followers} />
                    <StatEntry title='Following' value={userData.following} />
                  </div>

                  {/* Fields */}
                  {/* Might wanna refactor these empty check later on */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <FieldEntry icon={<IoLocation />} value={userData.location ? userData.location : 'Not available'} />
                    <FieldEntry icon={<IoLink />} 
                      value={userData.blog ? userData.blog : userData.html_url} 
                      href={userData.blog ? userData.blog : userData.html_url} 
                    />
                    <FieldEntry icon={<IoLogoTwitter />} 
                      value={userData.twitter_username ? `@${userData.twitter_username}` : 'Not available'} 
                      href={userData.twitter_username ? `https://twitter.com/${userData.twitter_username}` : '#'}
                    />
                    <FieldEntry icon={<IoBusiness />} value={userData.company ? userData.company : 'Not available'} />
                  </div>
                </div>
              </div>
            : 
              /* Error 404 */
              <div className="flex-1 py-20 text-center font-bold">
                <h1 className="text-7xl text-slate-100">404</h1>
                <p className="text-slate-400">User not found!</p>
              </div>
          }
        </div>
      </div>
    </main>
  );
}

export default App;
