import React from 'react';
import { User } from "../../types/User";

interface Props {
  user: User,
  onClick?: any
}

const SearchCard:React.FC<Props> = ({user, onClick}) => {
  return (
    <div 
      className="flex bg-card-light rounded-2xl shadow-2xl overflow-hidden transition select-none dark:bg-card-dark dark:hover:bg-card-dark-hover hover:cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={user.avatar_url} 
        alt="Default profile" 
        className="h-auto w-24 lg:w-32" 
      />
      <div className="flex flex-col justify-center pl-8 py-4">
        {user.name ?
          <React.Fragment>
            <p className="text-xl">{user.name}</p>
            <p className="opacity-90 hover:opacity-100 text-blue-400">/{user.login}</p>
          </React.Fragment>
          :
          <p className="opacity-100 text-blue-400 text-xl">/{user.name}</p>
        }
      </div>
    </div>
  );
}

export default SearchCard;