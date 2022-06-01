import React from 'react';

interface Props {
  username: string,
  avatar: string,
  name?: string,
  onClick?: any
}

const SearchCard:React.FC<Props> = (props) => {
  return (
    <div 
      className="flex bg-card-light rounded-2xl shadow-2xl overflow-hidden transition select-none dark:bg-card-dark dark:hover:bg-card-dark-hover hover:cursor-pointer"
      onClick={props.onClick}
    >
      <img 
        src={props.avatar} 
        alt="Default profile" 
        className="h-auto w-24 lg:w-32" 
      />
      <div className="flex flex-col justify-center pl-8 py-4">
        {props.name ?
          <React.Fragment>
            <p className="text-xl">{props.name}</p>
            <p className="opacity-90 hover:opacity-100 text-blue-400">/{props.username}</p>
          </React.Fragment>
          :
          <p className="opacity-100 text-blue-400 text-xl">/{props.username}</p>
        }
      </div>
    </div>
  );
}

export default SearchCard;