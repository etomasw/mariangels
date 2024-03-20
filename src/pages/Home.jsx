import React, { useState, useEffect } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {MdOutlineDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom';
import '../component/PreLoader'
import PreLoader from '../component/PreLoader';
import { FaUser } from "react-icons/fa";
import { FaRegAngry } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

import toast, { Toaster } from 'react-hot-toast';


const Home = () => {

    const menus = [
        {name:"Inicio", link: '/', icon: MdOutlineDashboard, margin: true},
        {name:"Encuesta", link: '/encuesta', icon: MdQuiz, margin: true},
        {name:"Quejas", link: '/quejas', icon: FaRegAngry, margin: true},
        {name:"Coco Suiti", link: '/coco', icon: FaCat, margin: true},
    ]

    const notify = () => toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://s3.us-east-005.backblazeb2.com/FicRol/uploads/photos/2023/08/ficrol_bf8dde3847e02828f1b1f8c6df0f536f_cropped.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Nanami Sexo
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Sexo confirmado con el Doctor Sexo!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Cerrar
            </button>
            
          </div>
        </div>
      ));

      const errorNotificar = () => toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/mahito-vs-nobara-jjk.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Mahito mas conocido como la maldicion de tercer grado
                </p>
                <p className="mt-1 text-sm text-red-500">
                  Soy Mahito más conocido como la maldicion de tercer grado, no puedes pulsar eso!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              PULSA EL VERDE
            </button>
            
          </div>
        </div>
      ));


    const [firstLoad, setFirstLoad] = useState(true);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
         // setFirstLoad(false);
        }, 4000);
    
        return () => {
        };
      }, []);

  return (
    <section className='flex gap-6'>    
        {firstLoad && <PreLoader />}
        <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
            <div className="py-3 flex justify-end">
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
            </div>

            <div className='mt-4 flex flex-col gap-4 relative'>
                {
                    menus?.map((menu, i) => (
                        <Link to={menu?.link} key={i} className={`${menu?.margin && "mt-5"} flex items-center text-sm 
                        gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                            <div>
                                {React.createElement(menu?.icon, {size: '20'})}
                            </div>
                            <h2 
                                style={{transitionDelay: `${i + 3}00ms`,}}
                                className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden' }`}>
                                    {menu?.name}
                            </h2>
                        </Link>
                    ))
                }
                
            </div>
        </div>
        <div className="m-3 text-xl">
            <div className="text-xl font-extrabold">
            PORTAL DE MARI ANGELS
            </div>
            <p>Holaa te amo mucho y he creado esta página para que tengas todo facherito</p>
            <div className='flex items-center py-3'>
                <button 
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' 
                    onClick={notify}>CONFIRMAR
                </button>
                <button 
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-3 rounded' 
                    onClick={errorNotificar}>DENEGAR
                </button>
            </div>
            
            <Toaster />
        </div>

    </section>
  )
}

export default Home