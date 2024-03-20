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
import "./encuesta.css";

const Encuesta = () => {
  const [open, setOpen] = useState(true);

  const menus = [
    { name: "Inicio", link: "/", icon: MdOutlineDashboard, margin: true },
    { name: "Encuesta", link: "/encuesta", icon: MdQuiz, margin: true },
    { name: "Quejas", link: "/quejas", icon: FaRegAngry, margin: true },
    { name: "Coco Suiti", link: "/coco", icon: FaCat, margin: true },
  ];

  const questions = [
    {
      questionText: "Siempre tienes razon?",
      answerOptions: [
        { answerText: "Si", isCorrect: false },
        { answerText: "Siempre", isCorrect: true },
        { answerText: "A veces", isCorrect: false },
        { answerText: "Tu eres la razon", isCorrect: false },
      ],
    },
    {
      questionText: "Cuando fue la primera guerra mundial?",
      answerOptions: [
        { answerText: "1943", isCorrect: false },
        { answerText: "2012", isCorrect: true },
        { answerText: "Nanami", isCorrect: false },
        { answerText: "1939", isCorrect: false },
      ],
    },
    {
      questionText: "Nos vamos a casar?",
      answerOptions: [
        { answerText: "Oui", isCorrect: true },
        { answerText: "Of corse", isCorrect: true },
        { answerText: "Si", isCorrect: true },
        { answerText: "Yes", isCorrect: true },
      ],
    },
    {
      questionText: "Soy el mejor novio?",
      answerOptions: [
        { answerText: "Si", isCorrect: true },
        { answerText: "Si", isCorrect: true },
        { answerText: "Si", isCorrect: true },
        { answerText: "Si", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <section className="flex gap-6">
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
        <div className="text-xl font-extrabold">ENCUESTAS</div>
        <p>Encuestas para Mari Angels</p>

        <p>Seleccione su nombre:</p>
        <div class="flex items-center">
          <input
            disabled
            checked
            id="disabled-checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            for="disabled-checked-checkbox"
            class="ms-2 text-lg font-medium text-gray-400 dark:text-gray-500"
          >
            Mari Angels
          </label>
        </div>

        {showScore ? (
          <div className="score-section">
            Mari Angels has respondido correctamente {score} de{" "}
            {questions.length}, osea fatal fatal
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Pregunta del sexo {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="boton-encuesta mb-4"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Encuesta;
