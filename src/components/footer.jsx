import React from 'react';

const App = ()=>{

    return(
        <div className="flex bg-slate-800 items-start flex-wrap w-full sm:p-[10vh] pt-[15vh]  relative">
          <img className='sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] absolute top-10 right-10 drop-shadow-xl' src={require('../assets/photo/logo192.png')}/>
          <div className="w-full relative flex flex-wrap items-center justify-evenly">
            <p className='text-foote-top  text-center tracking-wide w-full px-[7vh] sm:w-3/6 text-initial text-slate-100 drop-shadow-lg '>
              Our team works tirelessly to provide quality services and the best solutions for your problems, considering customer satisfaction. You can fully trust the expertise and integrity of our team.
            </p>
            <ul style={{gap:10}} className='p-[10px] flex flex-row sm:flex-col flex-wrap mt-[10vh] items-center justify-center [&>li]:font-bold [&>li]:text-sky-500 sm:[&>li]:text-md [&>li]:text-sm [&>li]:p-2 [&>li]:px-4 [&>li]:rounded-[20px] '>
              <li className='hover:bg-black/50'><a href="#certificate">Certificate</a></li>
              <li className='hover:bg-black/50'><a href="#Comment">Comment</a></li>
              <li className='hover:bg-black/50'><a href="#Projects">Project</a></li>
              <li className='hover:bg-black/50'><a href="#teamMemmber">Team</a></li>
            </ul>
          </div>
          <div className="m-auto w-full px-[10px] mt-[50px] border-t-[2px] border-sky-500 py-[20px] text-slate-100 text-xs ">
            <span>Created by mr.bakh</span>
          </div>
        </div>
    )
}

export default App;