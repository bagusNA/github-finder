import React from 'react';

interface EntryProps {
  icon: any,
  value: string,
  href?: string
}

export const FieldEntry:React.FC<EntryProps> = props => {
  return (
    <div className="flex items-center gap-x-3">
      <span className="text-3xl">{props.icon}</span>

      { props.href
        ? <a href={props.href}>{props.value}</a>
        : <p>{props.value}</p>
      }
    </div>
  )
}
