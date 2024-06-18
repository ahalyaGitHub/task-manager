import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';
import TM1 from '../img/tm2.jpg'

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);



  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white text-dark h-[91.8vh] py-8 text-center">
            <div className='text-dark flex flex-col justify-center items-center'>
              <h1 className='text-7xl font-extrabold mb-7 text-left'> Welcome to 
                <span className='block text-primary mt-3'>Task Manager </span>
                </h1>
                <h1 className='text-3xl font-bold mb-5'> Don't miss a single project deadline !
                
                </h1>
              <Link to="/signup" className='mt-10 text-xl block space-x-2 hover:space-x-4 bg-primary px-5 py-3 rounded-md text-white'>
                <span className='transition-[margin] '>Join now to manage your tasks</span>
                <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
            <div className='flex justify-center items-center'>
              <img src={TM1} alt="" className='h-[70vh] max-w-full h-auto' />
            </div>
          </div>
        ) : (
          <>
            <h1 className='text-3xl mt-8 mx-8 border-b pb-4 border-b-gray-300 font-bold'>Welcome  
            <span className='text-primary ml-3'>{authState.user.name}</span></h1>
            <Tasks />
          </>
        )}
      </MainLayout>
    </>
  )
}

export default Home