import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoLocation, IoLink, IoMail, IoBusiness, IoLogoTwitter } from 'react-icons/io5';
import Moment from 'react-moment';

import { SearchBar } from './components/SearchBar';
import { StatEntry } from './components/StatEntry';
import { FieldEntry } from "./components/FieldEntry";
import defaultProfile from './assets/img/profile.jpg';

const settings = {
  pictureWidth: 100,
  lgPictureWidth: 150,
}

function App() {
  const [userData, setUserData] = useState({
    name: 'Patrick Star',
    login: 'patrick',
    html_url: 'https://github.com/users/bagusNA',
    avatar_url: 'https://avatars.githubusercontent.com/u/84782823?v=4',
    createdAt: '2021-05-25T12:38:17Z',
    email: 'patrickstar@mail.com',
    company: 'Rock Company',
    location: 'Bikini Bottom',
    twitter_username: 'patrickOnTwit',
    public_repos: 7,
    followers: 2,
    following: 7,
    isDefault: true,
    bio: null,
    blog: null,
  });
  const [search, setSearch] = useState('');

  function handleSearchChange(e: any) {
    setSearch(e.target.value);
  }

  async function handleSearchAction() {
    setUserData(await getUserData(search))
  }

  function getUserData(username: string) {
    return fetch('https://api.github.com/users/' + username)
      .then(res => res.json())
  }

  return (
    <main className="min-h-screen flex justify-center bg-dark text-sm text-light font-mono lg:text-base">
      <div className="min-h-screen flex flex-col gap-y-6  p-6 md:justify-center md:container lg:max-w-screen-lg">
        {/* Header */}
        <div className="flex justify-between items-center pb-2">
          <h1 className="text-xl font-bold md:text-2xl">GitHub-finder</h1>
          <div className="flex items-center gap-x-2">
            <p className="tracking-widest text-sm">LIGHT</p>
            <IoSunnyOutline className="text-2xl"/>
          </div>
        </div>

        {/* Search bar */}
        <SearchBar value={search} onInputChange={handleSearchChange} onButtonClick={handleSearchAction} />

        {/* Main card */}
        <div className="bg-card-dark p-5 rounded-2xl shadow-2xl lg:p-8">
          <div className="flex gap-x-12 ">
            {/* Profile picture for lg screen */}
              <img 
                src={userData.avatar_url}
                alt="Default profile"
                width={settings.lgPictureWidth}
                className="rounded-full hidden self-start lg:block"
              />
            <div className="flex flex-col gap-y-6">
              {/* Main info */}
              <div className="flex gap-x-6">
                <img src={userData.avatar_url} alt="Default profile" className="rounded-full lg:hidden" width={settings.pictureWidth} />
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
              <p className="leading-8">
                {userData.bio
                  ? userData.bio 
                  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus voluptatibus error quidem enim! Officia atque vero repellat nulla recusandae rem! Modi mollitia minus placeat quod minima fugit itaque voluptatem!'}
              </p>

              {/* Profile stats */}
              <div className="grid grid-cols-3 justify-between py-4 bg-dark rounded-xl md:px-8">
                <StatEntry title='Repos' value={userData.public_repos} />
                <StatEntry title='Followers' value={userData.followers} />
                <StatEntry title='Following' value={userData.following} />
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <FieldEntry icon={<IoLocation />} value={userData.location} />
                <FieldEntry icon={<IoLink />} 
                  value={userData.blog ? userData.blog : userData.html_url} 
                  href={userData.blog ? userData.blog : userData.html_url} 
                />
                <FieldEntry icon={<IoLogoTwitter />} value={userData.twitter_username} href={`https://twitter.com/${userData}`}/>
                <FieldEntry icon={<IoBusiness />} value={userData.company} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
