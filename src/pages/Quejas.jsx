import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import "../component/PreLoader";
import PreLoader from "../component/PreLoader";
import { FaRegAngry } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const menus = [
    { name: "Inicio", link: "/", icon: MdOutlineDashboard, margin: true },
    { name: "Encuesta", link: "/encuesta", icon: MdQuiz, margin: true },
    { name: "Quejas", link: "/quejas", icon: FaRegAngry, margin: true },
    { name: "Coco Suiti", link: "/coco", icon: FaCat, margin: true },
  ];

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    toast.success(
      "Muy bien Mari Angels, tu queja ha sido publicado y en breves revisaremos tu queja."
    );
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <Toaster />
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${menu?.margin && "mt-5"} flex items-center text-sm 
                        gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl">
        <div className="text-xl font-extrabold">QUEJAS DE MARI ANGELS</div>

        <div className="main-container py-5 flex flex-wrap mr-5">
          {comments.map((text) => (
            <a
              href="#"
              class="mr-5 mt-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                QUEJA DE MARI ANGELS
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </a>
          ))}
        </div>
        <div className="comment-flexbox">
          <h3 className="font-bold comment-text mb-2">Agregar queja</h3>
          <textarea
            value={comment}
            onChange={onChangeHandler}
            id="message"
            rows="4"
            class="mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cuentame tus quejas Mari Angels"
          ></textarea>

          <button
            onClick={onClickHandler}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            PUBLICAR QUEJA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
