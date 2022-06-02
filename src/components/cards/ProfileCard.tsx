import React from 'react';
import Moment from 'react-moment';
import { IoLocation, IoLink, IoBusiness, IoLogoTwitter } from 'react-icons/io5';

import { User } from '../../types/User';
import { StatEntry } from '../StatEntry';
import { FieldEntry } from '../FieldEntry';
import { settings, defaultData } from '../../options';

interface Props {
  userData : User
}

const ProfileCard:React.FC<Props> = ({userData = defaultData}) => {
  return (
    <div className="flex bg-card-light p-5 rounded-2xl shadow-2xl lg:p-8 dark:bg-card-dark">
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
              <p>Joined at <Moment format="MMMM DD, YYYY" date={Date.parse(userData.created_at)} /></p>
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
            <StatEntry title='Repos' value={userData.public_repos} link={userData.html_url + "?tab=repositories"} />
            <StatEntry title='Followers' value={userData.followers} link={userData.html_url + "?tab=followers"} />
            <StatEntry title='Following' value={userData.following} link={userData.html_url + "?tab=following"} />
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
    </div>
  )
}

export default ProfileCard;