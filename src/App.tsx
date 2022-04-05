import React from "react";
import { IoSunnyOutline, IoLocation, IoLink, IoMail, IoBusiness } from 'react-icons/io5';

import SearchBar from './components/SearchBar';
import { StatEntry } from './components/StatEntry';
import { FieldEntry } from "./components/FieldEntry";
import defaultProfile from './assets/img/profile.jpg';

const settings = {
  pictureWidth: 100,
  lgPictureWidth: 150,
}

function App() {
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
        <SearchBar />

        {/* Main card */}
        <div className="bg-card-dark p-5 rounded-2xl shadow-2xl lg:p-8">
          <div className="flex gap-x-12 ">
            {/* Profile picture for lg screen */}
              <img 
                src={defaultProfile}
                alt="Default profile"
                width={settings.lgPictureWidth}
                className="rounded-full hidden self-start lg:block"
              />
            <div className="flex flex-col gap-y-6">
              {/* Main info */}
              <div className="flex gap-x-6">
                <img src={defaultProfile} alt="Default profile" className="rounded-full lg:hidden" width={settings.pictureWidth} />
                <div className="flex flex-col justify-center gap-y-1 lg:flex-row lg:justify-between lg:w-full">
                  <div className="flex flex-col justify-center gap-y-1">
                    <h2 className="font-bold text-xl">Bagus Nur A.</h2>
                    <a 
                      className="text-blue-400" 
                      href="https://github.com/bagusNA"
                    >
                      @bagusNA
                    </a>
                  </div>
                  <p className="">Joined 7 July, 2019</p>
                </div>
              </div>

                {/* Description */}
              <p className="leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus voluptatibus error quidem enim! Officia atque vero repellat nulla recusandae rem! Modi mollitia minus placeat quod minima fugit itaque voluptatem!</p>

              {/* Profile stats */}
              <div className="grid grid-cols-3 justify-between py-4 bg-dark rounded-xl md:px-8">
                <StatEntry title='Repos' value={8} />
                <StatEntry title='Followers' value={8} />
                <StatEntry title='Following' value={8} />
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <FieldEntry icon={<IoLocation />} value='East Borneo, Indonesia' />
                <FieldEntry icon={<IoLink />} value='https://github.com/bagusNA' href="https://github.com/bagusNA"/>
                <FieldEntry icon={<IoMail />} value='bagusnur@protonmail.com' href="mailto:bagusnur@protonmail.com"/>
                <FieldEntry icon={<IoBusiness />} value='Intern at Jupiter IT Solution' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
