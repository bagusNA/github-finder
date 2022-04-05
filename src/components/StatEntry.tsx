import React from 'react'

interface StatProps {
  title: string,
  value: number
}

export const StatEntry:React.FC<StatProps> = props => {
  return (
    <div className="flex flex-col justify-between gap-y-2 text-center">
      <p>{props.title}</p>
      <p className="font-bold text-lg">{props.value}</p>
    </div>
  )
}
