import React from 'react';

const App = ()=>{

    return(
        
        <div className="flex bg-sky-800 items-start flex-wrap w-full p-[5vh] sm:p-[10px]">
          <div className="w-full relative flex flex-wrap items-center justify-evenly">
            <p className='text-foote-top text-center tracking-wide w-full p- sm:w-3/6 text-initial text-slate-950'>
              Our team works tirelessly to provide quality services and the best solutions for your problems, considering customer satisfaction. You can fully trust the expertise and integrity of our team.
            </p>
            <ul style={{gap:10}} className='p-[10px] flex flex-row sm:flex-col flex-wrap mt-[10vh] items-center justify-center [&>li]:font-bold sm:[&>li]:text-md [&>li]:text-sm [&>li]:p-2 [&>li]:px-4 [&>li]:rounded-[20px] '>
              <li className='hover:bg-sky-500'><a href="#certificate">Certificate</a></li>
              <li className='hover:bg-sky-500'><a href="#Comment">Comment</a></li>
              <li className='hover:bg-sky-500'><a href="#Projects">Project</a></li>
              <li className='hover:bg-sky-500'><a href="#teamMemmber">Team</a></li>
            </ul>
          </div>
          <div className="m-auto w-full px-[10px] mt-[50px] border-t-[2px] border-sky-900 text-sky-900 text-xs ">
            <span>Created by mr.bakh</span>
          </div>
        </div>
    )
}

export default App;