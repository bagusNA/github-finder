import React from 'react'

interface StatProps {
  title: string,
  value: number,
  link?: string 
}

export const StatEntry:React.FC<StatProps> = props => {
  return (
    <a href={props.link ?? "#"} target="_blank" rel='noreferrer'>
      <div className="flex flex-col justify-between gap-y-2 text-center md:text-left md:text-lg">
        <p>{props.title}</p>
        <p className="font-bold text-lg md:text-2xl">{props.value}</p>
      </div>
    </a>
  )
}
