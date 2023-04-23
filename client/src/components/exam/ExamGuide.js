import React,{ useContext } from "react";
import { ExamContext } from "../../state/ExamState";

const ExamGuide = () => {
    const exam = useContext(ExamContext)
  return (
    <div className="h-screen lg:p-20">
      <div className="bg-emerald-100 h-full lg:py-10 lg:px-20 relative shadow-2xl">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Welcome to E-Exam
        </h1>
        <h3 className="text-lg lg:text-2xl font-bold">Guidelines</h3>
        <ul className="list-disc">
          <li>
            Make sure you have all necessary materials before starting the exam.
          </li>
          <li>Read all instructions and questions carefully.</li>
          <li>
            Manage your time wisely and pace yourself throughout the exam.
          </li>
          <li>Answer the easiest questions first to build your confidence.</li>
          <li>
            If you get stuck on a question, move on to the next one and come
            back later.
          </li>
          <li>
            Check your work and review your answers before submitting your exam.
          </li>
          <li>Do not cheat or plagiarize in any way.</li>
          <li>
            Respect the exam environment and the other students taking the exam.
          </li>
          <li>
            If you have any questions or concerns, raise your hand and wait for
            assistance.
          </li>
        </ul>
        <div className="flex justify-center mt-16">
        <button className="bg-emerald-400 py-2 px-4 rounded-md m-auto" onClick={exam.incStage}>
        Start Now!
        </button>
        </div>
      </div>
    </div>
  );
};

export default ExamGuide;