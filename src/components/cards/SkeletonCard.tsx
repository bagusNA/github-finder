import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="transition flex gap-x-4 animate-pulse rounded-2xl p-5 bg-card-light lg:p-8 dark:bg-card-dark">
      <div className="flex justify-center items-center">
        <div className="rounded-full p-12 bg-slate-700 lg:p-20"></div>
      </div>
      <div className="flex-1 flex flex-col gap-y-2 px-1">
        <div className="flex justify-between w-full">
          <div className="w-3/4 bg-slate-700 rounded-full after:content-[','] after:invisible lg:w-2/5"></div>
          <div className="hidden w-1/3 bg-slate-700 rounded-full after:content-[','] after:invisible lg:block"></div>
        </div>
        <div className="w-2/5 bg-slate-700 rounded-full after:content-[','] after:invisible lg:w-1/3"></div>
        <br />
        <div className="w-full bg-slate-700 rounded-full after:content-[','] after:invisible"></div>
        <div className="w-full bg-slate-700 rounded-full after:content-[','] after:invisible"></div>
        <div className="hidden w-full bg-slate-700 rounded-full after:content-[','] after:invisible lg:block"></div>
      </div>
    </div>
  );
}