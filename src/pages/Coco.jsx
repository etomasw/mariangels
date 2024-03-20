import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {MdOutlineDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom';
import '../component/PreLoader'
import PreLoader from '../component/PreLoader';
import { FaRegAngry } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";


const Coco = () => {

  const menus = [
    {name:"Inicio", link: '/', icon: MdOutlineDashboard, margin: true},
    {name:"Encuesta", link: '/encuesta', icon: MdQuiz, margin: true},
    {name:"Quejas", link: '/quejas', icon: FaRegAngry, margin: true},
    {name:"Coco Suiti", link: '/coco', icon: FaCat, margin: true},
]

  const [open, setOpen] = useState(true);

  return (
    <section className='flex gap-6'>    
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
                COCO SUITI
            </div>
            <p>Seccion en construccion a la espera de confirmacion de Coco Suiti.</p>
        </div>
    </section>
  )
}

export default Coco